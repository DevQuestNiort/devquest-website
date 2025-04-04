import { Section } from "@/components/Section";
import { Avatar } from "@/components/Avatar";
import { Galery } from "@/components/Galery";
import { Membre } from "@/model/Membre";


interface CompagnonsSectionProperties {
  readonly membres: Membre[];
}

export function CompagnonsSection({membres}:CompagnonsSectionProperties) {
    return (
        <Section theme="Light">
        <h2>Les compagnons de l'aventure</h2>
        <p> Parce que cette aventure est possible gràce aux compagnons qui nous aident dans les différentes étapes et quêtes de cette aventure. Que ce soit le jour J, avant , en codant, en organisant et même en bricolant, merci à eux !</p>
        <Galery>
          {membres
            .sort(() => (Math.random() > 0.5 ? 1 : -1))
            .map((m, i) => (
              <Avatar
                key={i}
                img={m.img}
                name={m.name}
                metier={m.metier}
                color={defineColor(m.role)}
                github={m.github}
                linkedin={m.linkedin}
              />
            ))}
        </Galery>
      </Section>
    );
}


function defineColor (role: String){
  switch (role){
    case "BENEVOLE" : return "RED";
    case "VIP" : return "YELLOW";
    case "MC" : return "BLUE";
    default : return "NONE"
  }
}