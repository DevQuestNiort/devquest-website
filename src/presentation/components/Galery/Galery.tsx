import styles from './Galery.module.scss'
import {ReactElement} from "react";


interface GaleryProperties {
    children: ReactElement[];
}


export default function Galery({children}: GaleryProperties) {

    return ( <div className={styles.galery}>
        {children}
    </div>)

}