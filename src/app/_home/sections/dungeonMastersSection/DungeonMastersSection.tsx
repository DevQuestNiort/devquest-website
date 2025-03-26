import { Section } from "@/components/Section";
import { Avatar } from "@/components/Avatar";
import { Galery } from "@/components/Galery";
import { Membre } from "@/model/Membre";


interface DungeonMastersSectionProperties {
  readonly membres: Membre[];
}

export function DungeonMastersSection({membres}:DungeonMastersSectionProperties) {
    return (
        <Section theme="Light">
        <h2>Les maîtres du donjon</h2>
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