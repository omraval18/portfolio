"use client"
import React from 'react'
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/global/mdx';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, Globe } from 'lucide-react';
import { formatDate } from 'date-fns';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
    params: {
        id: string
    }
}

async function getDocsFromParams(slug: string) {
    const doc = allPosts.find((doc) => doc.slugAsParams === slug);
    console.log(doc)
    if (!doc) notFound();

    return doc;
}

export default async function Page({ params }: Props) {
    const post = await getDocsFromParams(params.id);

    if (!post) {
        notFound();
    }

    

    return (
        <article className="container relative max-w-3xl py-6 lg:py-10">
            <Link
                href="/work"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-[-200px] top-14 hidden xl:inline-flex"
                )}
            >
                <ChevronLeft className="mr-2 h-4 w-4" />
                See all posts
            </Link>
            <div>
                {post.date && (
                    <time dateTime={post.date} className="block text-sm text-muted-foreground">
                        Published on {formatDate(post.date, "MMMM d, yyyy")}
                    </time>
                )}
                <h1 className="mt-2 max-w-full  inline-block font-bold text-4xl leading-relaxed lg:text-5xl">
                    {post.title}
                </h1>
            </div>
            {(post.github || post.live) && (
                <div className="flex mt-4 items-center border border-muted/40 p-2 rounded-lg">
                    {post.github && (
                        <Link href={post.github as string}>
                            <Button variant={"ghost"} size={"icon"}>
                                <Image
                                    width={24}
                                    height={24}
                                    src="/github-mark-white.svg"
                                    alt="Github"
                                />
                            </Button>
                        </Link>
                    )}
                    {post.live && (
                        <Link href={post.live as string}>
                            <Button variant={"ghost"} size={"icon"}>
                                <Globe className="h-6 w-6" />
                            </Button>
                        </Link>
                    )}
                </div>
            )}
            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={720}
                    height={405}
                    className="my-8 rounded-md border bg-muted transition-colors"
                    priority
                />
            )}
            <Mdx code={post.body.code} />
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link href="/work" className={cn(buttonVariants({ variant: "ghost" }))}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    See all posts
                </Link>
            </div>
        </article>
    );
}


