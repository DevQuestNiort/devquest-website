import style from "./Avatar.module.scss";

interface AvartarProperties {
    readonly img: string
    readonly name: string
    readonly role: string
    readonly github?: string;
    readonly linkedin?: string;

}

export default function Avatar({ img, name, role, github, linkedin }: AvartarProperties) {
    return <div>
        <img class={style.avatar} height="128" width="128" src={img} alt={name} />
        <h2>{name}</h2>
        <div class={style.infos}>

            <p>{role}</p>
            {github && <a target="_blank" href={`https://github.com/${github}`}><span class="icon-github"></span></a>}
            {linkedin && <a target="_blank" href={`https://www.linkedin.com/in/${linkedin}`}><span class="icon-linkedin"></span></a>}
        </div>

    </div>
}
