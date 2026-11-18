import { principles } from "@/lib/resume";
import { Label, Section, TitledList } from "./section";

export function Approach() {
  return (
    <Section id="approach" title="Approach">
      <TitledList items={principles} />
      <Label className="mb-2 mt-10">Now</Label>
      <p className="text-sm leading-relaxed text-neutral-400">
        Going deeper into database internals, operating systems, networking and agent harnesses.
        Open to AI engineer and backend/infrastructure roles at remote or relocation-friendly
        startups.
      </p>
    </Section>
  );
}
