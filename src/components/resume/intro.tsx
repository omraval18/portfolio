import { about, profile, tldr, whatIDo } from "@/lib/resume";
import { Emph } from "./emphasis";
import { GithubActivity } from "./github-activity";
import { Section, TitledList } from "./section";

export function Intro() {
  return (
    <header className="pb-12">
      <p className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
        {profile.hero}
      </p>
      <p className="mt-6 leading-relaxed text-neutral-400">{profile.intro}</p>
      <dl className="mt-10 rounded-lg border border-white/10 p-5">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-neutral-600">TL;DR</p>
        <div className="space-y-3">
          {tldr.map(([k, v]) => (
            <div key={k} className="grid gap-0.5 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
              <dt className="text-xs leading-6 text-neutral-500">{k}</dt>
              <dd className="text-sm leading-6 text-neutral-300">
                {k === "Now" && (
                  <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-emerald-400" />
                )}
                <Emph text={v} />
              </dd>
            </div>
          ))}
        </div>
      </dl>
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
