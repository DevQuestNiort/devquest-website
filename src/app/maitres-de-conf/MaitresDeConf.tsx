import styles from "./maitresDeConf.module.scss";
import {Section} from "@/components/Section";
import {promises as fs} from "fs";
import Image from "next/image";
import {Card} from "@/components/Card";

import backgroundImage from "/public/avatar/MCview.png";

interface MaitreDeConf {
    id: string;
    nom: string;
    avatar: string;
    citation: string;
}

const getMaitres = async () => JSON.parse(
    await fs.readFile(
        process.cwd() + "/src/app/maitres-de-conf/maitresDeConf.json",
        "utf8",
    )
) as MaitreDeConf[];

export async function MaitresDeConf() {
    const maitres = await getMaitres();

    return (
        <div className={styles.maitresDeConfContainer}>
            <HeroSection/>

            <Section theme="Dark">
                <h2>🎙️ Leur mission</h2>
                <p>
                    Les Maîtres de Conf sont des bénévoles qui jouent le rôle d&apos;anges gardiens auprès des
                    conférenciers tout au long de leur passage sur scène. Présents à leurs côtés de l&apos;introduction
                    jusqu&apos;aux questions du public, ils veillent à ce que chaque talk se déroule dans les meilleures
                    conditions.
                </p>
                <ul>
                    <li>🎤 Introduire et présenter le conférencier avant son talk</li>
                    <li>⏱️ Guider la gestion du temps pendant la conférence</li>
                    <li>🙋 Orchestrer la session de questions-réponses en fin de talk</li>
                    <li>🎙️ Circuler dans la salle pour distribuer le micro au public</li>
                    <li>💚 Être un soutien bienveillant pour les speaker·euses</li>
                </ul>
            </Section>

            <Section theme="Dark">
                <h2>🌟 Les Maîtres de Conf (édition 2026)</h2>
                <p>
                    Cette année, 5 bénévoles endossent le rôle de Maître de Conf.
                    Découvrez celles et ceux qui accompagneront les speaker·euses lors du DevQuest 2026.
                </p>
                <div className={styles.maitresGrid}>
                    {maitres.map((maitre) => (
                        <div key={maitre.id} className={styles.maitrCard}>
                            <div className={styles.maitrAvatar}>
                                <Image
                                    src={maitre.avatar}
                                    alt={maitre.nom}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <h3 className={styles.maitrName}>{maitre.nom}</h3>
                            <blockquote className={styles.maitrCitation}>
                                {maitre.citation}
                            </blockquote>
                        </div>
                    ))}
                </div>
            </Section>

            <Section theme="Light">
                <h2>💛 Merci à eux !</h2>
                <p>
                    Un grand merci à tous nos Maîtres de Conf pour leur générosité et leur investissement.
                    Grâce à eux, les conférenciers peuvent se concentrer sur l&apos;essentiel : partager leur savoir avec
                    la communauté.
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
            <h1>Les Maîtres de Conf</h1>
            <h2>🧭 Les anges gardiens des speaker·euses</h2>
            <p>
                Les Maîtres de Conf sont des bénévoles passionnés qui accompagnent chaque conférencier·ère
                le jour J.<br/> Ils assurent une introduction chaleureuse, veillent au respect du timing et
                animent la session de questions en fin de talk.
            </p>
        </Card>
    </Section>)
}
