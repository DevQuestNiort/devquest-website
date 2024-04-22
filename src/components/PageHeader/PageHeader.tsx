"use client";
import Image from "next/image";
import styles from "./PageHeader.module.scss";
import config from '../../data/config.json'
import Link from "next/link";
import { LinkButton } from "../LinkButton";
import {usePathname } from "next/navigation";

export const PageHeader = () => {
    const pathname = usePathname ();

    const isActive = (href: string) => pathname === href;

    return <nav className={styles.header}>
        <div className={styles.containerFluid}>
            <Link href="/">
                <Image
                    src={`/devquest-color.svg`}
                    alt={"logo devquest"}
                    width={64}
                    height={64}
                />
            </Link>

            <Link href="/" className={styles.otherHeaderBrand} style={{fontWeight: isActive('/') ? 'bold' : 'normal'}}>Accueil</Link>

            <span className={styles.separator}>|</span>

            <Link href="/schedule" className={styles.otherHeaderBrand} style={{fontWeight: isActive('/schedule') || pathname.includes('/sessions') ? 'bold' : 'normal'}}>Programme</Link>

            <span className={styles.separator}>|</span>

            <Link href={config.kitPartenaires} className={styles.otherHeaderBrand}>Kit partenaires</Link>

            <span className={styles.separator}>|</span>


            <Link href={config.kitMedia} className={styles.otherHeaderBrand}>Kit Média</Link>

            <div className={styles.mainBtnContainer}>
                {!isActive('/') && <LinkButton
                theme="Primary"
                classes={styles.reserverMaPlace}
                href={config.shop}
            >
                Réserver mes places
            </LinkButton>}
            </div>
        </div>
    </nav>
}