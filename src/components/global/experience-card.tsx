import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpenText, Code, Link as URL } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import SpotlightCard from "./spotlight-card";

export interface ExperienceCardData {
  title: string;
  description: string;
  tags?: string[];
  live?: string;
  code?: string;
  working?: boolean;
  read?: string;
}

export function ExperienceCard({
  title,
  description,
  tags,
  live,
  code,
  working = false,
  read,
}: ExperienceCardData) {
  return (
    <SpotlightCard>
      <Card className="w-full max-w-sm h-full flex flex-col border-none">
        <CardHeader>
          <CardTitle className=" flex items-center gap-2  text-lg font-bricolage">
            {title}
            {working && (
              <Badge
                variant="outline"
                className="gap-1.5 font-inter text-xs font-normal"
              >
                <span
                  className="size-1.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                ></span>
                Working
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <div>
            <div>{description}</div>
            <div className="gap-1 rounded-sm flex flex-wrap mt-2">
              {tags?.map((tag, index) => (
                <Badge
                  key={index}
                  variant={"secondary"}
                  className="font-light text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex gap-2">
          {live && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={live} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full size-8 rounded-md"
                      size="icon"
                    >
                      <URL className="size-4" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Website</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {code && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={code} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full size-8 rounded-md"
                      size="icon"
                    >
                      <Code className="size-4" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Source</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {read && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={read}>
                    <Button
                      variant="outline"
                      className="w-full size-8 rounded-md"
                      size="icon"
                    >
                      <BookOpenText className="size-4" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Read Blog</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </CardFooter>
      </Card>
    </SpotlightCard>
  );
}

