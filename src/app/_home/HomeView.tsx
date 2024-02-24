import Image from "next/image";
import styles from "./Home.module.scss";
import { Membre } from "@/model/Membre";
import { Avatar } from "@/components/Avatar";
import { Galery } from "@/components/Galery";
import { Thematique } from "../../components/Thematique";
import { Theme } from "@/model/Theme";
import { MoyensContact } from "@/model/MoyensContact";
import { Contact } from "@/components/Contact";
import { Section } from "@/components/Section";
import backgroundImage from "../../../public/devquest-fond-min.jpg";
import backgroundMapImage from "../../../public/devquest-bg-map.jpg";
import { Card } from "@/components/Card";
import { LinkButton } from "../../components/LinkButton";

interface HomeViewProperties {
  readonly themes: Theme[];
  readonly membres: Membre[];
  readonly contacts: MoyensContact[];
}

export default function HomeView({
  contacts,
  membres,
  themes,
}: HomeViewProperties) {
  return (
    <div className={styles.main}>
      <Section
        id={styles.heroSection}
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Image
          id={styles.logo}
          src="/logo-date-lieu.svg"
          alt="DevQuest"
          priority
          width={240}
          height={270}
        />
        <h1 id={styles.mainTitle}>
          Le premier rassemblement
          <br />
          dev niortais
        </h1>
        <div className={styles.row}>
          <LinkButton
            theme="Primary"
            href="https://conference-hall.io/public/event/geINICiIQFU0WdORU423"
          >
            Proposer un sujet
          </LinkButton>
          <LinkButton
            theme="Secondary"
            href="https://www.billetweb.fr/devquest-niort-2024"
          >
            Réserver mes places
          </LinkButton>
        </div>
      </Section>
      <Section theme="Dark">
        <h2>
          Des conférences.
          <br />
          Des sangliers. De la cervoise.
        </h2>

        <Card>
          L&apos;été prochain, ne manquez pas le premier événement
          ludico-professionnel niortais dédié aux développeurs. Améliorez vos
          compétences et surtout… Profitez de l&apos;aventure&nbsp;!
        </Card>

        <div id={styles.rows}>
          {contacts.map((contact, i) => (
            <Contact
              key={i}
              name={contact.name}
              asset={contact.asset}
              icon={contact.icon}
              link={contact.link}
            />
          ))}
        </div>
      </Section>
      <Section theme="Light">
        <h2>
          Diantre, DevQuest dîtes-vous&nbsp;? <br />
          Qu&apos;est-ce donc que cela&nbsp;?
        </h2>
        <div id={styles.eventspec}>
          <div>
            <Image
              height={96}
              width={96}
              alt="backpack"
              src="/icons-rp/backpack.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              1<br />
              journée
            </p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/knight.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              150
              <br />
              spectateurs
            </p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="king"
              src="/icons-rp/king.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              16
              <br />
              partenaires
            </p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="quest"
              src="/icons-rp/quest.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              20 présentations multi&nbsp;format
            </p>
          </div>
        </div>
      </Section>
      <Section theme="Dark">
        <h2>Les classes disponibles</h2>
        <div className={styles.themeContainer}>
          {themes.map((theme, i) => (
            <Thematique
              key={i}
              img={theme.img}
              name={theme.name}
              details={theme.details}
            />
          ))}
        </div>
      </Section>
      <Section theme="Light">
        <div
          id={styles.mapContainer}
          style={{
            backgroundImage: `url(${backgroundMapImage.src})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Card id={styles.cardMap}>
            <h2>Le lieux</h2>
            <h3>Parc des expositions, Niort</h3>
            <p>
              Pour cette première quête, voulant recevoir les aventuriers dans
              les meilleures conditions , nous vous attendons dans ce lieu bien
              connu de tous qu&apos;est le Dôme du parc des expositions de
              Niort.
            </p>
            <LinkButton
              theme="Primary"
              href="https://www.google.com/maps/dir/?api=1&destination=46.3293427,-0.4899051"
            >
              C&apos;est parti&nbsp;!
            </LinkButton>
          </Card>
        </div>
      </Section>
      <Section theme="Dark">
        <h2>Les quêtes</h2>
        <Card>
          <Image
            height={96}
            width={96}
            alt="mission"
            src="/icons-rp/mission.png"
            aria-hidden="true"
          />
          <p>
            Le programme n&apos;est pas encore disponible, mais d&apos;ores et
            déjà, nous pouvons vous dire que les histoires que vous entendrez
            vous raconterons des épopées sur l&apos;intelligence artificielle
            mais aussi autour de l&apos;artisanat logiciel… ou bien encore
            d&apos;autres sujets passionnants!
          </p>
        </Card>
      </Section>
      <Section theme="Light">
        <h2>Les maîtres du donjon</h2>
        <Galery>
          {membres
            .sort(() => (Math.random() > 0.5 ? 1 : -1))
            .map((m, i) => (
              <Avatar
                key={i}
                img={m.img}
                firstName={m.firstName}
                lastName={m.lastName}
                role={m.role}
                github={m.github}
                linkedin={m.linkedin}
              />
            ))}
        </Galery>
      </Section>
      <footer id={styles.footer}>
        <b aria-hidden="true">@ 2024 - DevQuest</b>
      </footer>
    </div>
  );
}
