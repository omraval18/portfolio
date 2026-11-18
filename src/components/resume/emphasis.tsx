// Brightens the numbers that matter (40%, 280 commits, 6 currencies, 70+...)
// so a skimming reader catches the impact without any extra chrome.
const METRIC =
  /(\b\d+(?:\.\d+)?%|\b\d+\+|\b\d+(?:\.\d+)? (?:commits|weeks|currencies|MB|features)\b|SOC 2 Type II|zero double bookings|double bookings)/g;

export function Emph({ text }: { text: string }) {
  const parts = text.split(METRIC);
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
