import { Card } from "@/components/Card";
import { DevQuestLogoShortDate } from "@/components/DevQuestLogo";
import Dummy from "@/components/dummy/Dummy";
import { Section } from "@/components/Section";




export default function Archives () {

  return (
    <>
    <Section variant="Main">
      <DevQuestLogoShortDate
        width={350}
        height={320}
        darkColor="var(--chapter-color)"
        lightColor="var(--main-color)"
        haloColor="var(--complementary-color)"
        haloSize={20}
      />     
       <DevQuestLogoShortDate
        width={350}
        height={320}
        darkColor="var(--complementary-color)"
        lightColor="var(--main-color)"
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