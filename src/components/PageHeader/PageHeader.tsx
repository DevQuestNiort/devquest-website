import Image from "next/image";
import styles from "./PageHeader.module.scss";
import config from '../../data/config.json'
import Link from "next/link";

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

            <Link href={config.shop} className={styles.otherHeaderBrand}>Réserver ma place</Link>
        </div>
    </nav>
}