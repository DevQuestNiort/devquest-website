import { Section } from "@/components/Section";

import { Galery } from "@/components/Galery";
import Card from "@/components/Card/Card";
import { DevQuestLogo } from "@/components/DevQuestLogo";

export  function Private() {
    return (
       <Section variant="Main">
           <h1>Page Privée</h1>
           <p>Bienvenue sur la page privée.</p>

           <Galery columns={3}>

          <Card variant="ChapterLight"> 
            <h3>Logo noir</h3>
            <DevQuestLogo
              glyphColor="black"
              backgroundColor="none"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo blanc</h3>
            <DevQuestLogo
              glyphColor="white"
              backgroundColor="none"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo </h3>
            <DevQuestLogo
              glyphColor="var(--chapter-color)"
              backgroundColor="var(--main-color)"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo inverse</h3>
            <DevQuestLogo
              glyphColor="var(--main-color)"
              backgroundColor="var(--chapter-color)"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo sans fondz</h3>
            <DevQuestLogo
              glyphColor="var(--chapter-color)"
              backgroundColor="none"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo inverse sans fond</h3>
            <DevQuestLogo
              glyphColor="var(--main-color)"
              backgroundColor="none"
              width={96}
              height={96}
            />
          </Card>
                    <Card variant="ChapterLight">
            <h3>Logo inverse sans fond</h3>
            <DevQuestLogo
              glyphColor="var(--main-color)"
              backgroundColor="none"
              
              width={96}
              height={96}
            />
          </Card>
        </Galery>
       </Section>
    );
}