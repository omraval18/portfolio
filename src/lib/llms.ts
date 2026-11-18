import {
  about, BOOK_URL, experience, experiments, profile, projects, SITE_URL, skills, whatIDo,
} from "@/lib/resume";

const links = profile.socials.map((s) => `- [${s.label}](${s.href})`).join("\n");

export function llmsTxt() {
  return `# ${profile.name}

> ${profile.role} based in ${profile.location}. ${profile.hero} ${profile.intro}

${profile.status}.

## Pages
- [Home / resume](${SITE_URL}/): about, experience, projects, approach
- [Full resume as markdown](${SITE_URL}/llms-full.txt): everything on this site in one file

## Contact
- [Book a quick chat](${BOOK_URL})
${links}

## Optional
${projects.filter((p) => p.href).map((p) => `- [${p.name}](${p.href}): ${p.desc}`).join("\n")}
`;
}

export function llmsFullTxt() {
  return `# ${profile.name} — ${profile.role}

> ${profile.hero} ${profile.intro}

Location: ${profile.location}. ${profile.status}.
Site: ${SITE_URL} · Book a call: ${BOOK_URL}

${links}

## About
${about.join("\n\n")}

## What I do
${whatIDo.map(([t, d]) => `- **${t}.** ${d}`).join("\n")}

## Experience
${experience
  .map(
    (j) => `### ${j.role}, ${j.company} (${j.dates}, ${j.place})
${j.summary}

${j.groups
  .map((g) => `${g.title ? `**${g.title}**\n` : ""}${g.items.map((i) => `- ${i}`).join("\n")}`)
  .join("\n\n")}

Skills: ${j.skills.join(", ")}`,
  )
  .join("\n\n")}

## Projects
${projects
  .map((p) => `### ${p.name}\n${p.desc}\nStack: ${p.stack}${p.href ? `\nLink: ${p.href}` : p.note ? `\n(${p.note})` : ""}`)
  .join("\n\n")}

### Experiments
${experiments.map(([n, d]) => `- ${n}: ${d}`).join("\n")}

## Skills
${skills.map(([k, v]) => `- ${k}: ${v.join(", ")}`).join("\n")}
`;
}
