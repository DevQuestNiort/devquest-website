import { Section } from "@/components/Section";

import { Galery } from "@/components/Galery";
import Card from "@/components/Card/Card";
import { DevQuestLogoShortDate, DevQuestLogoLongDate, DownloadLogoPng } from "@/components/DevQuestLogo";

export  function Private() {
    return (
       <Section variant="Main">
           <h1>Page Privée</h1>
           <p>Bienvenue sur la page privée.</p>

           <Galery columns={3}>

          <Card variant="ChapterLight"> 
            <h3>Logo noir</h3>
            <DevQuestLogoShortDate
              darkColor="black"
              lightColor="none"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo blanc</h3>
            <DevQuestLogoShortDate
              darkColor="white"
              lightColor="none"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo </h3>
            <DevQuestLogoShortDate
              darkColor="var(--chapter-color)"
              lightColor="var(--main-color)"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo inverse</h3>
            <DevQuestLogoShortDate
              darkColor="var(--main-color)"
              lightColor="var(--chapter-color)"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo sans fondz</h3>
            <DevQuestLogoShortDate
              darkColor="var(--chapter-color)"
              lightColor="none"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo inverse sans fond</h3>
            <DevQuestLogoShortDate
              darkColor="var(--main-color)"
              lightColor="none"
              width={96}
              height={96}
            />
          </Card>
                    <Card variant="ChapterLight">
            <h3>Logo inverse sans fond</h3>
            <DevQuestLogoShortDate
              darkColor="var(--main-color)"
              lightColor="none"
              
              width={96}
              height={96}
            />
          </Card>
        </Galery>

           <h2>Logo court avec ville et date</h2>
           <Galery columns={3}>
          <Card variant="ChapterLight">
            <h3>Noir et blanc</h3>
            <DownloadLogoPng filename="devquest-logo-court-niort">
              <DevQuestLogoShortDate city="Niort" date="10 & 11 Juin" height={160} />
            </DownloadLogoPng>
          </Card>
          <Card variant="ChapterLight">
            <h3>Couleurs du thème</h3>
            <DevQuestLogoShortDate
              darkColor="var(--main-color)"
              lightColor="var(--chapter-color)"
              city="Niort"
              date="10 & 11 Juin"
              height={160}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Sans texte</h3>
            <DevQuestLogoShortDate height={160} />
          </Card>
          <Card variant="ChapterLight">
            <h3>Avec halo</h3>
            <DevQuestLogoShortDate
              city="Niort"
              date="10 & 11 Juin"
              haloColor="var(--chapter-color)"
              height={160}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Ville seule</h3>
            <DevQuestLogoShortDate city="Niort" height={160} />
          </Card>
          <Card variant="ChapterLight">
            <h3>Date seule</h3>
            <DevQuestLogoShortDate date="10 & 11 Juin" height={160} />
          </Card>
        </Galery>

           <h2>Logo long avec ville et date</h2>
           <Galery columns={2}>
          <Card variant="ChapterLight">
            <h3>Noir et blanc</h3>
            <DownloadLogoPng filename="devquest-logo-long-niort">
              <DevQuestLogoLongDate city="NIORT" date="10 & 11 Juin" width={300} />
            </DownloadLogoPng>
          </Card>
          <Card variant="ChapterLight">
            <h3>Couleurs du thème</h3>
            <DevQuestLogoLongDate
              darkColor="var(--main-color)"
              lightColor="var(--chapter-color)"
              city="NIORT"
              date="10 & 11 Juin"
              width={300}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Sans texte</h3>
            <DevQuestLogoLongDate width={300} />
          </Card>
          <Card variant="ChapterLight">
            <h3>Avec halo</h3>
            <DevQuestLogoLongDate
              city="NIORT"
              date="10 & 11 Juin"
              haloColor="var(--complementary-color)"
              width={300}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Ville seule</h3>
            <DevQuestLogoLongDate city="NIORT" width={300} />
          </Card>
        </Galery>
       </Section>
    );
}