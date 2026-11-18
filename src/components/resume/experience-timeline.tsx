import { experience, slug, type Job } from "@/lib/resume";
import { Emph } from "./emphasis";
import { Section } from "./section";

export const jobId = (j: Job) => `job-${slug(j.company + j.dates)}`;

function Entry({ job }: { job: Job }) {
  return (
    <article id={jobId(job)} className="scroll-mt-24">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="flex flex-wrap items-baseline gap-x-2 font-medium text-white">
          <span>
            {job.role}
            <span className="text-neutral-500"> · {job.company}</span>
          </span>
          {job.current && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
              Now
            </span>
          )}
        </h3>
        <span className="font-mono text-xs text-neutral-600">{job.dates}</span>
      </div>
      <p className="mt-1 text-xs text-neutral-600">{job.place}</p>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{job.summary}</p>
      {job.highlight && (
        <p className="mt-4 border-l border-white/30 pl-3 text-sm leading-relaxed text-neutral-200">
          <Emph text={job.highlight} />
        </p>
      )}
      {job.groups.map((g, i) => (
        <div key={i} className="mt-5">
          {g.title && (
            <h4 className="mb-2 font-mono text-[11px] uppercase tracking-widest text-neutral-600">
              {g.title}
            </h4>
          )}
          <ul className="space-y-2 text-sm leading-relaxed text-neutral-400">
            {g.items.map((it) => (
              <li
                key={it}
                className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-neutral-700"
              >
                <Emph text={it} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-neutral-600">
        {job.skills.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </p>
    </article>
  );
}

export function ExperienceTimeline() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-14">
        {experience.map((j) => (
          <Entry key={jobId(j)} job={j} />
        ))}
      </div>
    </Section>
  );
}
