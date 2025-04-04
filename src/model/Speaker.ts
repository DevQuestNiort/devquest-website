export interface Speaker{
    name: string,
    id: string,
    picture: string,
    company: string,
    bio?:string,
    social?: {
        x: string,
        linkedin: string,
        github: string,
        instagram: string,
        website: string,
    }
    sessionsId: string[],
}