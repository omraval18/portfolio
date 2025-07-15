import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import LiquidChrome from "./liquid-chrome";

export interface TimelineItem {
  title: string;
  subtitle?: string;
  date: string;
  details?: React.ReactNode;
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <Accordion type="multiple" className="divide-y divide-gray-700 w-full">
      {items.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                <LiquidChrome
                  baseColor={[0.2, 0.2, 0.5]}
                  speed={1}
                  amplitude={0.5}
                  frequencyX={3}
                  frequencyY={2}
                  interactive={false}
                  className="absolute inset-0 w-full h-full"
                />
                <div
                  className="absolute inset-0 z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm"
                  aria-hidden="true"
                />
                <span className="relative z-20 flex items-center justify-center w-full h-full text-white font-bold">
                  {idx + 1}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                )}
              </div>
            </div>

            <AccordionTrigger className="pl-4 text-sm text-gray-400">
              {item.date}
            </AccordionTrigger>
          </div>

          {item.details && (
            <AccordionContent className="px-12 pb-4 text-gray-300">
              {item.details}
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
