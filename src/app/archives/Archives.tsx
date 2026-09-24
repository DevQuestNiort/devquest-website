import { Card } from "@/components/Card";
import { DevQuestLogo } from "@/components/DevQuestLogo";
import Dummy from "@/components/dummy/Dummy";
import { Section } from "@/components/Section";




export default function Archives () {

  return (
    <>
    <Section variant="Main">
      <DevQuestLogo
        width={350}
        height={320}
        glyphColor="var(--chapter-color)"
        backgroundColor="var(--main-color)"
        haloColor="var(--complementary-color)"
        haloSize={20}
      />     
       <DevQuestLogo
        width={350}
        height={320}
        glyphColor="var(--complementary-color)"
        backgroundColor="var(--main-color)"
        haloColor="var(--complementary-color)"
        haloSize={20}
      />
      <Card variant="Main" >
        <h1>Le premier rassemblement des devs Niortais Revient bientôt</h1>
      </Card>
      
    </Section>
    <Dummy />
    </>
  );
}