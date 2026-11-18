import { now, principles } from "@/lib/resume";
import { Label, Section, TitledList } from "./section";

export function Approach() {
  return (
    <Section id="approach" title="Approach">
      <TitledList items={principles} />
      <Label className="mb-2 mt-10">Now</Label>
      <p className="text-sm leading-relaxed text-neutral-400">{now}</p>
    </Section>
  );
}
