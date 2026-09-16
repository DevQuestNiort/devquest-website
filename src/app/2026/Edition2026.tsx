import { Card } from "@/components/Card";
import { Galery } from "@/components/Galery";
import { Section } from "@/components/Section";

export default function Edition2026() {
  return (
    <div>
     <Section theme="Light" >

          <h2>La troisième édition du dev quest c'est : </h2>
          <Galery>
            <Card>350 paticipants</Card>
            <Card>13 sponsors</Card>
            <Card>800 repas</Card>
            <Card>47 speakers</Card>
          </Galery>
      </Section>

      <Section theme="Dark" >

          <h2>Les guildes presentent cette année la </h2>
          <Galery>
            <Card>350 paticipants</Card>
            <Card>13 sponsors</Card>
            <Card>800 repas</Card>
            <Card>47 speakers</Card>
          </Galery>
      </Section>

    </div>
  );
}