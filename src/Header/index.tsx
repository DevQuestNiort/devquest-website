import {Component} from "solid-js";
import styles from "./Header.module.scss";

const Header: Component = () =>{

    return (
        <header class={styles.header}>
        <div class={styles.logoContainer}>
            <a href="/">
                <img src="/logo.png" alt="DevQuest"/>
            </a>
        </div>

        <div class={styles.navBar}>
            <ul>
                <div class={styles.navLink}>
                    <a href="/">
                        Accueil
                    </a>
                </div>

                <div class={styles.navLink}>
                    <a href="/team">
                        L'équipe
                    </a>
                </div>
            </ul>
        </div>
    </header>
    );
}

export default Header;