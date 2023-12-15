import styles from "./Avatar.module.scss";

interface AvartarProperties {
    img: string
    name: string
}

export default function Avatar({img, name}: AvartarProperties) {
    return <div>
        <img class={styles.avatar} src={img} alt={name}/>
        <h2>{name}</h2>
        <span>#Touriste</span>
    </div>
}