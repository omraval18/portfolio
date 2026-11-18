import { GITHUB_USER } from "@/lib/resume";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

// GitHub's dark-theme greens
const LEVEL = ["rgba(255,255,255,0.05)", "#0e4429", "#006d32", "#26a641", "#39d353"];
const CELL = 10;
const GAP = 3;
const STEP = CELL + GAP;
const TOP = 16; // room for month labels
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

async function getContributions(): Promise<{ days: Day[]; total: number } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
      { next: { revalidate: 60 * 60 * 6 } }, // refresh every 6 hours
    );
    if (!res.ok) return null;
    const data = await res.json();
    return { days: data.contributions, total: data.total?.lastYear ?? 0 };
  } catch {
    return null;
  }
}

export async function GithubActivity() {
  const data = await getContributions();
  if (!data || data.days.length === 0) return null;

  // Pad the front so column 0 starts on a Sunday, like GitHub.
  const offset = new Date(data.days[0].date + "T00:00:00Z").getUTCDay();
  const cells = [...Array<Day | null>(offset).fill(null), ...data.days];
  const weeks = Math.ceil(cells.length / 7);
  const width = weeks * STEP - GAP;
  const height = TOP + 7 * STEP - GAP;

  // Month label at the first column whose week contains the 1st of a month.
  const labels: { x: number; text: string }[] = [];
  let lastMonth = -1;
  for (let w = 0; w < weeks; w++) {
    const d = cells.slice(w * 7, w * 7 + 7).find(Boolean);
    if (!d) continue;
    const m = new Date(d.date + "T00:00:00Z").getUTCMonth();
    if (m !== lastMonth) {
      if (lastMonth !== -1 || w === 0) labels.push({ x: w * STEP, text: MONTHS[m] });
      lastMonth = m;
    }
  }
  // Drop a label that would collide with the next one.
  const shown = labels.filter((l, i) => !labels[i + 1] || labels[i + 1].x - l.x >= STEP * 3);

  return (
    <a
      href={`https://github.com/${GITHUB_USER}`}
      target="_blank"
      rel="noreferrer"
      className="group mt-10 block rounded-lg border border-white/10 p-4 transition-colors hover:border-white/20 hover:bg-neutral-950"
    >
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <p className="text-sm text-neutral-300">
          <span className="font-medium text-white">{data.total.toLocaleString("en-US")}</span>{" "}
          contributions in the last year
        </p>
        <span className="shrink-0 whitespace-nowrap font-mono text-[11px] text-neutral-500 transition-colors group-hover:text-white">
          @{GITHUB_USER} ↗
        </span>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label={`GitHub contribution graph: ${data.total} contributions in the last year`}
      >
        {shown.map((l) => (
          <text key={l.x} x={l.x} y={10} className="fill-neutral-600" fontSize={9}>
            {l.text}
          </text>
        ))}
        {cells.map((d, i) =>
          d ? (
            <rect
              key={d.date}
              x={Math.floor(i / 7) * STEP}
              y={TOP + (i % 7) * STEP}
              width={CELL}
              height={CELL}
              rx={2}
              fill={LEVEL[d.level]}
            >
              <title>{`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}</title>
            </rect>
          ) : null,
        )}
      </svg>

      <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-neutral-600">
        Less
        {LEVEL.map((c) => (
          <span key={c} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: c }} />
        ))}
        More
      </div>
    </a>
  );
}
