// Two kinds of emphasis a skimming recruiter should catch:
//  - metrics (40%, 6 currencies, 0.4 MB, 70+)
//  - ownership phrases (solo, zero to launch, Led...)
//  - hand-marked technical terms (**term** in the copy), with a faint underline
// All in bright white against the grey body text.
const METRIC =
  /\b\d+y(?: \d+m)?\b|~?\d+ years\b|\b\d+(?:\.\d+)?B\b|\b\d+(?:\.\d+)?%|\b\d+\+|\b\d+(?:\.\d+)? (?:commits|weeks|currencies|MB|features)\b|SOC 2 Type II|zero double bookings/;
const OWNERSHIP =
  /\bzero to launch\b|\bsolo\b|\bLed\b|\blead a small team\b|\bwork directly with founders\b|\bRoot-caused\b/;

const ANY = new RegExp(`(${METRIC.source}|${OWNERSHIP.source})`, "g");

function Auto({ text }: { text: string }) {
  const parts = text.split(ANY);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-medium text-white">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

// `**term**` in the copy marks a technical term to highlight by hand.
export function Emph({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-medium text-white underline decoration-white/25 underline-offset-4">
            {part}
          </span>
        ) : (
          <Auto key={i} text={part} />
        ),
      )}
    </>
  );
}
