export interface Session  {
    id: string,
    slug: string,
    title: string,
    format: Format,
    categorie: string,
    abstract: string,
    room: '',
    speakers: Speaker[],
    tags: Tags[],
    cancelled: boolean,
    slot: string
}

export interface Speaker{
    name: string,
    id: string,
    photo: string,
    company: string,
    bio?:string,
    social?: {
        x: string,
        linkedin: string,
        github: string,
        instagram: string,
        website: string
    }
}

export type Format = "Workshop" | "Quickie" | "Workshop";

export type Tags = 'backend' | 'frontend' | 'discovery' | 'cloud_devops' | 'tremplin' | 'architecture' | 'ux_ui';