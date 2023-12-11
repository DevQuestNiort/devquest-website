import type {Component} from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.scss';

const App: Component = () => {
    return (
        <div class={styles.App}>
            <div id={styles.main}>

                <img id={styles.logo} src="/logo-date-lieu.png" alt="DevQuest, le 14 Juin 2024 à Niort"/>


                <div class={styles.row}>
                    <div>

                        <a class={styles.btn} href="">DEVENIR SPEAKER</a>

                        <a class={styles.btn} href="">BILLETTERIE</a>
                    </div>

                </div>

                <div id={styles.infos}>

                    <div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350555.52676938265!2d-1.7364552520404568!3d46.65214213844539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48072fcbc6eabbfb%3A0x4febad6b6c995284!2sParc%20des%20Expositions%20de%20Noron!5e0!3m2!1sen!2sfr!4v1702323019379!5m2!1sen!2sfr"
                            width="600" height="450" style="border:0;" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div>

                        <p>L'évènement se veut communautaire et l'équipe n'est pas rémunérée pour l'organisation de celle ci.

                            L’objectif du DevQuest, association loi 1901 créée en 2023, est de promouvoir les différents secteurs de la tech au sein du bassin Niortais au travers d'événements divers.

                            La première instance du festival DevQuest aura lieu en Juin 2024 au parc Expo Noron de Niort.

                            Voici l'équipe à l'oeuvre pour cette première saison.</p>

                        <h3>NOUS CONTACTER</h3>

                        EMAIL : <a href="mailto:bureau@devquest.fr">bureau@devquest.fr</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default App;
