import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Partenaire } from "@/model/Partenaire";
import { LogoPartenaire } from "@/components/LogoPartenaire";
import { Galery } from "@/components/Galery";
import Image from "next/image";
import styles from "./PartnersSection.module.scss";

interface PartnersSectionProperties {

  readonly partenaires: Partenaire[];
}
export function PartnersSection({partenaires}: PartnersSectionProperties) {
    return (
<Section theme={"Dark"}>
        <h2>La tribu complète</h2>
        <Card theme="Light">
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
            <span>Légendaire</span>
          </h3>
          <div className={styles.soloImage}>
            {partenaires
              .filter((p) => p.level === "LEGENDAIRE")
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
                <strong>Toujours  assureur, plus que jamais militant.</strong> Avec vous et auprès de vous, MAIF réaffirme ses engagements et contribue à la construction d&apos;une société, plus humaine, plus solidaire et plus responsable.
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
            <span>EPIIIIQQUUUEEEE METTRE UNE AUTRE EPEE</span>
          </h3>
          {/*<Galery>
            {partenaires
              .filter((p) => p.level === "EPIQUE")
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
          </Galery>*/}
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
    );
}