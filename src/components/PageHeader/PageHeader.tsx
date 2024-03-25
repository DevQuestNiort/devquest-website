import Image from "next/image";
import styles from "./PageHeader.module.scss";

type PageHeaderProps = {
    title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => {
    return <nav className={styles.header}>
        <div className={styles.containerFluid}>
            <a className={styles.headerBrand} href="/">
                <Image
                    src={`/devquest-color.svg`}
                    alt={"logo devquest"}
                    width={64}
                    height={64}
                />
                {title}
            </a>
        </div>
    </nav>
}