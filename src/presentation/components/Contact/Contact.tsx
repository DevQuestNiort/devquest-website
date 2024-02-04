import styles from './Contact.module.scss'

interface ContactProperties {
    readonly asset?: string
    readonly icon?: string
    readonly name: string
    readonly link: string

}


export default function Contact({asset, name, link, icon}: ContactProperties) {

    if (icon) {
        return (<a
            className={styles.rs}
            href={link}
            aria-label={name}
        >
            <span className={icon}/>
        </a>)
    } else if (asset) {
        return (
            <a
                className={styles.rs}
                href={link}
                aria-label={name}
            >
                <img
                    height="32"
                    width="32"
                    src={asset}
                    alt=""
                    aria-hidden="true"
                />
            </a>)

    }


}