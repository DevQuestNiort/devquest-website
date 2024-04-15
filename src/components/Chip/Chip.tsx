import { ReactElement } from "react";
import styles from './Chip.module.scss'
import classNames from "classnames";



export const tagLabels = {
    iot_hardware: {
        label: "IoT & Hardware",
        icon: <span className="material-symbols-outlined">developer_board</span>
    },
    mobile: {
        label: "Mobile",
        icon: <span className="material-symbols-outlined">smartphone</span>,
    },
    web: {
        label: "Web",
        icon: <span className="material-symbols-outlined">language</span>,
    },
    discovery: {
        label: "Découverte",
        icon: <span className="material-symbols-outlined">lightbulb</span>,
    },
    cloud_devops: {
        label: "Cloud & DevOps",
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
    languages: {
        label: "Languages",
        icon: <span className="material-symbols-outlined">code</span>,
    },
    frontend: {
        label: "Frontend",
        icon: <span className="material-symbols-outlined">web</span>,
    },
    bigdata_ai: {
        label: "BigData & AI",
        icon: <span className="material-symbols-outlined">smart_toy</span>,
    },
    security: {
        label: "SECURITY",
        icon: <span className="material-symbols-outlined">security</span>,
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
