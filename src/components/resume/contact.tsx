import { BOOK_URL } from "@/lib/resume";
import { Section } from "./section";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-lg text-white">Building something hard? I&apos;d love to hear about it.</p>
      <div className="mt-6 flex flex-wrap items-center gap-5">
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-80"
        >
          Book a quick chat ↗
        </a>
        <a
          href="mailto:omrawal111@gmail.com"
          className="border-b border-white/30 pb-0.5 text-sm text-neutral-300 transition-colors hover:border-white hover:text-white"
        >
          omrawal111@gmail.com
        </a>
      </div>
      <div className="mt-12 text-xs text-neutral-700">
        <span>© {new Date().getFullYear()} Om Raval</span>
      </div>
    </Section>
  );
}
