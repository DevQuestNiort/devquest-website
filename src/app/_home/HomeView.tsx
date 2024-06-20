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
import backgroundImage from "../../../public/devquest-fond-min.png";
import backgroundMapImage from "../../../public/devquest-bg-map.jpg";
import { Card } from "@/components/Card";
import { LinkButton } from "../../components/LinkButton";
import { LogoPartenaire } from "@/components/LogoPartenaire";
import { Partenaire } from "@/model/Partenaire";

interface HomeViewProperties {
  readonly themes: Theme[];
  readonly membres: Membre[];
  readonly contacts: MoyensContact[];
  readonly partenaires: Partenaire[];
}

export default function HomeView({
  contacts,
  membres,
  themes,
  partenaires,
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HJrr43Jssoo?si=810pPSVCaYihn0YO&rel=0&autoplay=1&mute=1"
                title="Vidéo d'introduction du DevQuest" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className={styles.row}>
          <LinkButton theme="Secondary" href="https://photos.app.goo.gl/Uuv8qEwvxUkxnBoVA" target="_blank">Voir les
            photos</LinkButton>
          <LinkButton theme="Primary" href="https://www.youtube.com/channel/UCDFfMunDvS5yfZ9TaZfEq8w" target="_blank">Accéder
            au replays</LinkButton>
        </div>
      </Section>
      <Section theme="Dark">
        <h2>
          Le DevQuest, première édition, c&apos;est fini !!
        </h2>

        <Card>
          Merci @tous
          pour cette première aventure... <br/> Nous tenions à remercier
          l&apos;ensemble de nos partenaires, speakeuses et speakeurs,
          bénévoles, maîtres et maîtresse de conférence pour nous avoir aidé et
          accompagné dans cette aventure. Cette journée fut tellement intense
          et riche pour l&apos;ensemble de la team.. Mille mercis.
          <br />
          Suivez nous pour ne pas manquer les futures quêtes !
          <br />
          <br />
          Alice, Alex, Alex, Florent, Guillaume, Nicolas, Samuel, Susan,
          Vincent, Xavier.
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
              500
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
              19
              <br />
              partenaires
            </p>
          </div>
        </div>
      </Section>
      <Section theme="Light">
        <h2>Avec votre billet</h2>
        <p className={styles.eventSpecText}>Vous aurez accès à</p>
        <div id={styles.eventspec}>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/potion.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>10 conférences</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="king"
              src="/icons-rp/potion-tr.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>6 quick conferences</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="backpack"
              src="/icons-rp/forgeron.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>2 workshops</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="quest"
              src="/icons-rp/village.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              un espace de rencontre avec nos partenaires
            </p>
          </div>
        </div>
        <p className={styles.eventSpecText}>Mais aussi</p>
        <div id={styles.eventspec}>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/chicken.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              le repas du midi, pour tous les gouts
            </p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/tonneau-de-vin.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>la boisson</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/gateaux.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>une collation le matin</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/group.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              des organisateurs aux petits soins
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
            <h2>Le lieu</h2>
            <h3>Parc des expositions, Niort</h3>
            <p>
              Pour cette première quête, voulant recevoir les aventuriers dans
              les meilleures conditions, nous vous attendons dans ce lieu bien
              connu de tous qu&apos;est le Dôme du Parc des expositions de
              Niort.
            </p>
            <LinkButton
              theme="Primary"
              href="https://www.google.com/maps/dir/?api=1&destination=46.3306968,-0.4906424"
            >
              C&apos;est parti&nbsp;!
            </LinkButton>
          </Card>
        </div>
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
                name={m.name}
                role={m.role}
                github={m.github}
                linkedin={m.linkedin}
              />
            ))}
        </Galery>
      </Section>
      <Section theme={"Dark"}>
        <h2>La tribu complète</h2>
        <Card>
          <p>
            Car l&apos;aventure c&apos;est bien, mais avec des compagnons de
            route, c&apos;est mieux!
          </p>
          <Image
            height={96}
            width={96}
            alt=""
            src="/icons-rp/shield.png"
            aria-hidden="true"
          />
        </Card>
        <div className={styles.partnerSection}>
          <h2>Les guildes</h2>
          <h3>
            <Image
              height={32}
              width={32}
              alt=""
              src="/icons-rp/uniquesword.png"
              aria-hidden="true"
            />
            <span>Unique</span>
          </h3>
          <div className={styles.soloImage}>
            {partenaires
              .filter((p) => p.level === "UNIQUE")
              .map((p, i) => (
                <LogoPartenaire
                  key={i}
                  showName={false}
                  name={p.name}
                  level={p.level}
                  asset={p.asset}
                  website={p.site}
                  actif={p.actif}
                />
              ))}
            <div>
              <p>
                Wekey, le cabinet de transformation digitale qui accompagne les
                entreprises dans le développement de leurs projets et les
                freelances dans leur épanouissement professionnel.
              </p>
            </div>
          </div>
          <h3>
            <Image
              height={32}
              width={32}
              alt=""
              src="/icons-rp/raresword.png"
              aria-hidden="true"
            />
            <span>Rares</span>
          </h3>
          <Galery>
            {partenaires
              .filter((p) => p.level === "RARE")
              .sort(() => (Math.random() > 0.5 ? 1 : -1))
              .map((p, i) => (
                <LogoPartenaire
                  key={i}
                  name={p.name}
                  level={p.level}
                  asset={p.asset}
                  website={p.site}
                  actif={p.actif}
                />
              ))}
          </Galery>
          <h3>
            <Image
              height={32}
              width={32}
              alt=""
              src="/icons-rp/communsword.png"
              aria-hidden="true"
            />
            <span>Communs</span>
          </h3>
          <div className={styles.soloImage}>
            {partenaires
              .filter((p) => p.level === "COMMUN")
              .sort(() => (Math.random() > 0.5 ? 1 : -1))
              .map((p, i) => (
                <LogoPartenaire
                  key={i}
                  name={p.name}
                  level={p.level}
                  asset={p.asset}
                  website={p.site}
                  actif={p.actif}
                />
              ))}
          </div>
          <h2>
            <Image
              height={32}
              width={32}
              alt=""
              src="/icons-rp/magicsword.png"
              aria-hidden="true"
            />
            <span>Nos compagnons d&apos;aventure</span>
          </h2>
          <div className={styles.soloImage}>
            {partenaires
              .filter((p) => p.level === "AUTRE")
              .sort(() => (Math.random() > 0.5 ? 1 : -1))
              .map((p, i) => (
                <LogoPartenaire
                  key={i}
                  name={p.name}
                  level={p.level}
                  asset={p.asset}
                  website={p.site}
                  actif={p.actif}
                />
              ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
