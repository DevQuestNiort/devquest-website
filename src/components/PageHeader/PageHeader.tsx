import Image from "next/image";
import styles from "./PageHeader.module.scss";
import config from '../../data/config.json'
import Link from "next/link";
import { LinkButton } from "../LinkButton";

type PageHeaderProps = {
    title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => {
    return <nav className={styles.header}>
        <div className={styles.containerFluid}>
            <a href="/">
                <Image
                    src={`/devquest-color.svg`}
                    alt={"logo devquest"}
                    width={64}
                    height={64}
                />
            </a>

            <span className={styles.headerBrand}>{title}</span>

            <span className={styles.separator}>|</span>

            <Link href="/" className={styles.otherHeaderBrand}>Accueil</Link>

            <span className={styles.separator}>|</span>

            <Link href="/schedule" className={styles.otherHeaderBrand}>Programme</Link>

            <span className={styles.separator}>|</span>

            <Link href={config.kitPartenaires} className={styles.otherHeaderBrand}>Kit partenaires</Link>

            <span className={styles.separator}>|</span>



            <Link href={config.kitMedia} className={styles.otherHeaderBrand}>Kit Média</Link>

            <div className={styles.mainBtnContainer}>
            <LinkButton
                theme="Primary"
                classes={styles.reserverMaPlace}
                href={config.shop}
            >
                Réserver mes places
            </LinkButton>
            </div>
        </div>
    </nav>
}