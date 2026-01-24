import styles from "./conseilDesMages.module.scss";
import {Section} from "@/components/Section";
import {promises as fs} from "fs";
import Image from "next/image";
import {Card} from "@/components/Card";
import {LinkButton} from "@/components/LinkButton";
import config from "@/data/config.json";

import backgroundImage from "/public/avatar/conseilDeMage.png";

interface Mage {
    id: string;
    nom: string;
    avatar: string;
    citation: string;
}

const getMages = async () => JSON.parse(
    await fs.readFile(
        process.cwd() + "/src/app/conseil-des-mages/conseilsDesMages.json",
        "utf8",
    )
) as Mage[];

export async function ConseilDesMages() {
    const mages = await getMages();

    return (
        <div className={styles.conseilDesMagesContainer}>
            <HeroSection/>

            <Section theme="Dark">
                <h2>📜 Leurs missions</h2>
                <p>
                    Les Mages du DevQuest ont pour mission de parcourir l&apos;ensemble des parchemins envoyés par les
                    aventuriers afin de donner leur avis éclairé sur les propositions de conférences et de guider les
                    membres de la guilde DevQuest à
                    effectuer les bons choix.
                </p>
                <ul>
                    <li>📖 Lire avec attention les parchemins</li>
                    <li>💭 Émettre un avis sincère grâce à leurs connaissances</li>
                    <li>🎯 Aider à la création du DevQuest</li>
                </ul>
            </Section>
            <Section theme="Light">
                <h2>🛡️ Règles du Conseil</h2>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Règle</th>
                        <th>Pourquoi ?</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1️⃣</td>
                        <td>Pas de vote pour son propre talk</td>
                        <td>Évite les conflits d’intérêts.</td>
                    </tr>
                    <tr>
                        <td>2️⃣</td>
                        <td>Auteur d’un talk déjà publié ≠ membre du conseil</td>
                        <td>Assure la neutralité.</td>
                    </tr>
                    <tr>
                        <td>3️⃣</td>
                        <td>Confidentialité des abstracts non publiés</td>
                        <td>Protège le contenu avant décision officielle.</td>
                    </tr>
                    <tr>
                        <td>4️⃣</td>
                        <td>Évaluation selon critères objectifs</td>
                        <td>Uniformise le jugement.</td>
                    </tr>
                    <tr>
                        <td>5️⃣</td>
                        <td>Déclaration de tout conflit d’intérêt</td>
                        <td>Transparence totale.</td>
                    </tr>
                    <tr>
                        <td>6️⃣</td>
                        <td>Notation partagée (1‑5 ★)</td>
                        <td>Facilite la comparaison.</td>
                    </tr>
                    <tr>
                        <td>7️⃣</td>
                        <td>Respect mutuel & communication constructive</td>
                        <td>Climat de travail agréable.</td>
                    </tr>
                    </tbody>
                </table>

            </Section>
            <Section theme="Dark">
                <h2>🔮 Les Mages du Conseil (saison 3)</h2>
                <p>
                    Nous avons recruté un panel de sages pour mener cette mission.
                    Découvrez les sages qui composent notre Conseil des Mages à travers leurs citations
                    légendaires. Pour leur sécurité ( et parceque nous n&apos;avons pas leurs consentements), ils resteront anonymes.
                </p>
                <div className={styles.magesGrid}>
                    {mages.map((mage) => (
                        <div key={mage.id} className={styles.mageCard}>
                            <div className={styles.mageAvatar}>
                                <Image
                                    src={mage.avatar}
                                    alt={mage.nom}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <h3 className={styles.mageName}>{mage.nom}</h3>
                            <blockquote className={styles.mageCitation}>
                                {mage.citation}
                            </blockquote>
                        </div>
                    ))}
                </div>
            </Section>
            <Section theme="Light">
                <h2>🌟 Rejoindre le Conseil</h2>
                <p>
                    Malheureusement, les candidatures pour rejoindre le conseil sont closes cette saison.
                </p>
            </Section>
        </div>
    );
}


const HeroSection = () => {
    return (<Section
        className={styles.heroSection}
        style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}
    >
        <Card theme="Light">
            <h1> Le Conseil des Mages</h1>
            <h2>✨ Qui sont les Mages du DevQuest ?</h2>
            <p>
                Le Conseil des Mages est composé de volontaires parmi la communauté.<br/> Ces mages mettent leur
                expertise au service de l&apos;événement et de la guilde DevQuest.
            </p>
        </Card>
    </Section>)
}