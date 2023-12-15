import type {Component} from 'solid-js';
import styles from './App.module.scss';
import {Avatar} from "./components/Avatar";

const App: Component = () => {
    return (
        <div class={styles.App}>
            <div id={styles.main}>
                <div id={styles.brand}>
                    <img id={styles.logo} src="LOGO.svg" alt="DevQuest, le 14 Juin 2024 à Niort"/>

                    <h1>Le premier rassemblement dev niortais</h1>

                    <h2>Tu veux être speaker ?</h2>

                    <div class={styles.row}>
                        <div>

                            <a class={styles.btn} href="https://conference-hall.io/public/event/geINICiIQFU0WdORU423">Proposer
                                un sujet</a>
                        </div>

                    </div>
                </div>

                <div id={styles.infos}>
                    <h1>Des conférences. Des sangliers. De la cervoise.</h1>

                    <div class={styles.card}>
                        L'été prochain, ne manquez pas le premier événement ludico-professionnel niortais dédié aux
                        développeurs. Améliorez vos compétences et surtout... Profitez de l'aventure !
                    </div>

                    <div id={styles.rowrs}>
                        <a class={styles.rs}
                           href="https://conference-hall.io/public/event/geINICiIQFU0WdORU423">
                            <img height="32" width="32" src="logo-linkedin.png" alt="LinkedIn"/>
                        </a>

                        <a class={styles.rs}
                           href="https://conference-hall.io/public/event/geINICiIQFU0WdORU423">
                            <img height="32" width="32" src="logo-x.png" alt="LinkedIn"/>
                        </a>
                    </div>
                </div>

                <div id={styles.equipe}>
                    <h1>L'équipe</h1>
                    <div id={styles.galery}>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>
                        <Avatar img="https://i.pravatar.cc/128" name="John"/>

                    </div>
                    <p>2024 - DevQuest - <a href="#">Mentions légales</a></p>
                </div>

            </div>

        </div>
    );
};

export default App;
