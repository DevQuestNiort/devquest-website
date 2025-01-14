import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LinkButton } from "@/components/LinkButton";

import backgroundMapImage from "/public/devquest-bg-map.jpg";

import styles from "./MapSection.module.scss";

export function MapSection() {
    return (
        <Section theme="Dark">
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
              Vous avez tous adoré vous retrouver sous ce Dôme l&apos;année dernière.
              Cette année nous continuons donc nos aventures au Parc des expositions de
              Niort.
            </p>
            <LinkButton
              theme="Primary"
              target="_blank"
              href="https://www.google.com/maps/dir/?api=1&destination=46.3306968,-0.4906424"
            >
              C&apos;est parti&nbsp;!
            </LinkButton>
          </Card>
        </div>
      </Section>
    );
}