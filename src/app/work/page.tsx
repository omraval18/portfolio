"use client";
import React from "react";
import BlurText from "@/components/global/blur-text";
import {
  ExperienceCard,
  ExperienceCardData,
} from "@/components/global/experience-card";
import ExperienceTimeline, {
  TimelineItem,
} from "@/components/global/experience-timeline";
import Footer from "@/components/global/footer";
import { projects } from "@/lib/constants";

const experienceItems: TimelineItem[] = [
  {
    title: "Software Developer",
    subtitle: "Travelarrow (Remote, USA)",
    date: "Aug 2023 – Feb 2024",
    details: (
      <p className="text-gray-200">
        At Travelarrow, I developed a native iOS app using Swift and SwiftUI
        with an ExpressJS/TypeScript backend. I architected a robust hotel
        booking infrastructure, expanded inventory by integrating third-party
        APIs, and built an Apple Pay-integrated payment and subscription system.
        Additionally, I engineered a scalable multi-room booking feature and
        enhanced the UI/UX with custom modal overlays and state persistence.
      </p>
    ),
  },
  {
    title: "Fullstack Developer",
    subtitle: "AllEvents (Ahmedabad, GJ)",
    date: "Jan 2023 – Mar 2023",
    details: (
      <p className="text-gray-200">
        At AllEvents, I optimized the website to improve load times and SEO,
        implemented a Design Assets system to boost event attendance, and
        crafted responsive email templates for consistent branding. I also added
        several features using VueJS and PHP to enhance the platform’s
        functionality and user engagement.
      </p>
    ),
  },
  {
    title: "Software Developer",
    subtitle: "Freelance (Remote)",
    date: "Jul 2023 – Oct 2023",
    details: (
      <p className="text-gray-200">
        During my freelance project, I built a real-time IoT dashboard
        supporting over 500 devices per user, implemented secure admin login,
        user management, and a referral system, and designed a scalable SQL
        schema. I integrated React with Recoil for live data updates and set up
        Docker environments across all development stages.
      </p>
    ),
  },
];

export default function Work() {
  return (
    <div className="w-screen flex flex-col min-h-screen items-center overflow-auto gap-8">
      <div className="w-full max-w-4xl flex flex-col items-center px-4">
        <BlurText
          text="My Work"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl font-bold bricolage mb-8 mt-4"
        />
        <ExperienceTimeline items={experienceItems} />
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-20">
        {projects.map((p: ExperienceCardData, i: number) => (
          <ExperienceCard key={i} {...p} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
