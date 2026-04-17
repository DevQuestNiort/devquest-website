import { Section } from "@/components/Section";
import { Avatar } from "@/components/Avatar";
import { Galery } from "@/components/Galery";
import { Membre } from "@/model/Membre";

interface GuildeSectionProperties {
  readonly membres: Membre[];
}

export function GuildeSection({ membres }: GuildeSectionProperties) {
  return (
    <Section theme="Light">
      <h2>La Guilde du DevQuest</h2>
      <Galery>
        {membres
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .map((m, i) => (
            <Avatar
              key={i}
              img={m.picture}
              name={m.name}
              role={m.role}
              github={m.github}
              linkedin={m.linkedin}
            />
          ))}
      </Galery>
    </Section>
  );
}
