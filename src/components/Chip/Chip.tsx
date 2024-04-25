import { ReactElement } from "react";
import styles from './Chip.module.scss'
import classNames from "classnames";



export const tagLabels = {

    backend: {
        label: "Backend",
        icon: <span className="material-symbols-outlined">code</span>,
    },
    discovery: {
        label: "Quêtes secondaires",
        icon: <span className="material-symbols-outlined">lightbulb</span>,
    },
    cloud_devops: {
        label: "Cloud & DevSecOps",
        icon: <span className="material-symbols-outlined">cloud</span>,
    },
    architecture: {
        label: "Méthode & Architecture",
        icon: <span className="material-symbols-outlined">architecture</span>,
    },
    tremplin: {
        label: "Tremplin",
        icon: <span className="material-symbols-outlined">celebration</span>,
    },
    frontend: {
        label: "Frontend",
        icon: <span className="material-symbols-outlined">web</span>,
    },
    ux_ui: {
        label: "UX / UI",
        icon: <span className="material-symbols-outlined">brush</span>,
    },
};


export const Chip = ({ icon, label, classes }: { icon: ReactElement, label: string, classes?: string }) => <span className={classNames(styles.chip, classes)}>
    {icon}
    <span className={styles.chipLabel}>{label}</span>
</span>
