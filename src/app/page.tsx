import { TimelineRail } from "@/components/global/timeline-rail";
import { Approach } from "@/components/resume/approach";
import { Contact } from "@/components/resume/contact";
import { ExperienceTimeline } from "@/components/resume/experience-timeline";
import { About, Intro } from "@/components/resume/intro";
import { Projects } from "@/components/resume/projects";
import { railItems } from "@/components/resume/rail-items";
import { Sidebar } from "@/components/resume/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-mono text-neutral-300 antialiased selection:bg-white selection:text-black">
      <TimelineRail items={railItems} />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 lg:flex-row lg:gap-20 lg:py-0 lg:pr-14 xl:pr-6">
        <Sidebar />
        <main className="min-w-0 max-w-2xl flex-1 lg:py-20">
          <Intro />
          <About />
          <ExperienceTimeline />
          <Projects />
          <Approach />
          <Contact />
        </main>
      </div>
    </div>
  );
}
