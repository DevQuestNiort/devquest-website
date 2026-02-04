import styles from "./conseilDesMages.module.scss";
import {Section} from "@/components/Section";
import {promises as fs} from "fs";
import Image from "next/image";
import {Card} from "@/components/Card";

import backgroundImage from "/public/avatar/conseilDeMage.png";

interface Mage {
    id: string;
    nomDeMage:string;
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
                    Les Mages du DevQuest ont pour mission de parcourir l&apos;ensemble des parchemins envoyés par les aventuriers afin de donner leur avis éclairé sur les propositions de conférences pour guider les membres de la guilde DevQuest dans leurs choix.
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
                        <td>Les mages ne peuvent émettre un avis sur leur propre parchemin, ou sur des parchemins de proches et ce, bien que les parchemins soient anonymes
                            <br/></td>
                        <td>Évite les conflits d&apos;intérêts.</td>
                    </tr>
                    <tr>
                        <td>2️⃣</td>
                        <td>Les mages s&apos;engagent à garder leur lecture secrète, ainsi que les avis du conseil jusqu&apos;à la publication officielle du programme dans les grimoires</td>
                        <td>Protège le contenu avant décision officielle.</td>
                    </tr>
                    <tr>
                        <td>3️⃣</td>
                        <td>Les mages s&apos;engagent à évaluer de façon personnelle et avec leur propre sensibilité, les parchemins soumis par les aventuriers</td>
                        <td>Sincérité et diversité</td>
                    </tr>
                    <tr>
                        <td>4️⃣</td>
                        <td>Les mages s&apos;engagent à déclarer tout conflit d&apos;intérêt, comme leur propre soumission de talk.</td>
                        <td>Transparence totale.</td>

                    </tr>
                    <tr>
                        <td>5️⃣</td>
                        <td>Les mages s&apos;engagent à utiliser une notation partagée (1&ndash;5 ★)</td>
                        <td>Facilite la comparaison.</td>
                    </tr>
                    </tbody>
                </table>

            </Section>
            <Section theme="Dark">
                <h2>🔮 Les Mages du Conseil (saison 3)</h2>
                <p>
                    Nous avons recruté un panel de sages pour mener cette mission.
                    Découvrez les sages qui composent notre Conseil des Mages à travers leurs citations
                    légendaires.
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
                            <h3 className={styles.mageName}>{mage.nomDeMage}</h3>
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