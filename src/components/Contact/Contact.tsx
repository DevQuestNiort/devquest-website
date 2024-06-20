import styles from './Contact.module.scss';
import Image from "next/image";

interface ContactProperties {
  readonly asset?: string;
  readonly icon?: string;
  readonly name: string;
  readonly link: string;
}

export default function Contact({ asset, name, link, icon }: ContactProperties) {
  return <a className={styles.rs} href={link} aria-label={name} target="_blank">
    {icon && <span className={icon}/>}
    {asset && <Image height="32" width="32" src={asset} alt={name} aria-hidden="true"/>}
  </a>
}
