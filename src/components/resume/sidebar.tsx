import { BOOK_URL, profile, skills } from "@/lib/resume";
import { CopyPrompt } from "./copy-prompt";
import { Label } from "./section";

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-80 lg:shrink-0 lg:flex-col lg:justify-between lg:gap-6 lg:overflow-y-auto lg:py-14 [scrollbar-width:none]">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          {profile.name}
        </h1>
        <p className="mt-2 text-sm text-neutral-400">{profile.role}</p>
        <p className="mt-6 flex items-center gap-2 text-xs text-neutral-500">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          {profile.status}
        </p>
        <p className="mt-1 text-xs text-neutral-600">{profile.location}</p>


        <div className="mt-10">
          <Label className="mb-4">Skills</Label>
          <dl className="space-y-3">
            {skills.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] text-neutral-600">{k}</dt>
                <dd className="text-xs leading-relaxed text-neutral-400">{v.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-10 lg:mt-0">
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="mb-3 flex items-center justify-between rounded-md border border-white/15 px-4 py-2.5 text-sm text-white transition-colors hover:bg-white hover:text-black"
        >
          <span>Book a quick chat</span>
          <span aria-hidden>↗</span>
        </a>
        <CopyPrompt className="mb-6" />
        <ul className="space-y-3 text-sm">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 text-neutral-400 transition-colors hover:border-white/40 hover:text-white"
              >
                <span>{s.label}</span>
                <span className="truncate text-xs text-neutral-600 transition-colors group-hover:text-neutral-400">
                  {s.handle}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
