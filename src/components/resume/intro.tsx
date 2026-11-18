import { about, profile, whatIDo } from "@/lib/resume";
import { GithubActivity } from "./github-activity";
import { Section, TitledList } from "./section";

export function Intro() {
  return (
    <header className="pb-12">
      <p className="font-bricolage text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
        {profile.hero}
      </p>
      <p className="mt-6 leading-relaxed text-neutral-400">{profile.intro}</p>
      <GithubActivity />
    </header>
  );
}

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 leading-relaxed">
        <p className="text-white">{about[0]}</p>
        {about.slice(1).map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </div>
      <div className="mt-10">
        <TitledList items={whatIDo} />
      </div>
    </Section>
  );
}
