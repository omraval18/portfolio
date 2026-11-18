"use client";

import { useEffect, useRef, useState } from "react";

export type RailItem = {
  id: string;
  title: string;
  kicker?: string;
  meta?: string;
  current?: boolean;
  level: 0 | 1; // 0 = section, 1 = entry inside a section
};

export function TimelineRail({ items }: { items: RailItem[] }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const update = () => {
      raf.current = 0;
      const line = window.innerHeight * 0.35;
      let current = 0;
      items.forEach((it, i) => {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
      setProgress(items.length > 1 ? current / (items.length - 1) : 0);
    };
    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [items]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Page timeline"
      className="fixed top-1/2 z-30 hidden h-[76vh] -translate-y-1/2 lg:right-5 lg:block 2xl:right-10"
    >
      {/* track: faded line, plus a brighter segment up to the active dot */}
      <span
        aria-hidden
        className="absolute bottom-[7px] right-[7px] top-[7px] w-px translate-x-1/2 bg-gradient-to-b from-white/25 via-white/10 to-white/5"
      />
      <span
        aria-hidden
        className="absolute right-[7px] top-[7px] w-px translate-x-1/2 bg-white/50 transition-[height] duration-500 ease-out"
        style={{ height: `calc((100% - 15px) * ${progress})` }}
      />

      <ul className="relative flex h-full flex-col justify-between">
        {items.map((it, i) => {
          const isActive = i === active;
          const passed = i < active;
          const big = it.level === 0;
          return (
            <li key={it.id} className="group relative flex items-center justify-end">
              {/* hover card */}
              <div className="pointer-events-none absolute right-8 w-max max-w-[240px] translate-x-1 scale-95 rounded-lg border border-white/10 bg-neutral-950/95 px-3 py-2 opacity-0 shadow-xl shadow-black/60 backdrop-blur transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                <div className="flex items-center gap-2">
                  {it.kicker && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      {it.kicker}
                    </span>
                  )}
                  {it.current && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                      Now
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-white">{it.title}</p>
                {it.meta && <p className="mt-0.5 font-mono text-[10px] text-neutral-500">{it.meta}</p>}
              </div>

              <a
                href={`#${it.id}`}
                onClick={go(it.id)}
                aria-label={it.kicker ? `${it.kicker}: ${it.title}` : it.title}
                aria-current={isActive ? "true" : undefined}
                className="relative flex h-[15px] w-[15px] items-center justify-center rounded-full outline-none"
              >
                {/* ring */}
                <span
                  className={[
                    "absolute rounded-full bg-black transition-all duration-300",
                    big ? "inset-0" : "inset-[3px]",
                    isActive
                      ? "ring-1 ring-white/70 shadow-[0_0_12px_2px_rgba(255,255,255,0.35)]"
                      : "ring-1 ring-white/20 group-hover:ring-white/50",
                  ].join(" ")}
                />
                {it.current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/25" />
                )}
                {/* inner dot */}
                <span
                  className={[
                    "relative rounded-full transition-colors duration-300",
                    big ? "h-[7px] w-[7px]" : "h-[5px] w-[5px]",
                    it.current
                      ? "bg-emerald-400"
                      : isActive
                        ? "bg-white"
                        : passed
                          ? "bg-neutral-400"
                          : "bg-neutral-700 group-hover:bg-neutral-300",
                  ].join(" ")}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
