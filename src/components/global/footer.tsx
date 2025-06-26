"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export default function Footer() {
    return (
        <div className="fixed z-40 bottom-0 w-full flex justify-center items-center">
            <div className="p-4 min-w-[300px] rounded-xl mb-4 bg-muted/40 supports-backdrop-blur:bg-muted/90  z-40 backdrop-blur-lg">
                <div className="flex gap-2 items-center *:w-[33%]">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/">
                                    <Button variant={"secondary"}>Home</Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="text-center">
                                <p>Home</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/work">
                                    <Button variant={"secondary"}>Work</Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="text-center">
                                <p>My Work</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={process.env.NEXT_PUBLIC_RESUME_URL!}>
                                    <Button variant={"secondary"}>Resume</Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="text-center">
                                <p>My Resume</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div>
    );
}

