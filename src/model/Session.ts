export interface Session  {
    id: string,
    slug: string,
    title: string,
    format: Format,
    categorie: string,
    abstract: string,
    speakers: Speaker[]
}

export interface Speaker{
    name: string,
    id: string,
    photo: string,
    company: string
}

export type Format = "Workshop" | "Quickie" | "Workshop";