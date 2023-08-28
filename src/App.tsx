import type {Component} from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.scss';

const App: Component = () => {
    return (
        <div class={styles.App}>
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


          <div>

            <h1>Container principal</h1>
          </div>
        </div>
    );
};

export default App;
