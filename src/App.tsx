import type {Component} from 'solid-js';
import Index from "./Header";
import logo from './logo.svg';
import styles from './App.module.scss';

const App: Component = () => {
    return (
        <div class={styles.App}>

            <Index />

          <div>

            <h1>Container principal</h1>
          </div>
        </div>
    );
};

export default App;
