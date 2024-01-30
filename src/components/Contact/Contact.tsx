
import styles from './Contact.module.scss'

interface ContactProperties {
    readonly asset?: string
    readonly icon?: string
    readonly name: string
    readonly link: string

}



export default function Contact({ asset, name, link, icon }: ContactProperties) {

    if (icon) {
        return (<a
            class={styles.rs}
            href={link}
            aria-label={name}
        >
            <span class={icon} />
        </a>)
    }
    else if (asset) {
        return (
            <a
                class={styles.rs}
                href={link}
                aria-label={name}
            >
                <img
                    height="32"
                    width="32"
                    src={asset}
                    aria-hidden="true"
                />
            </a>)

    }



}