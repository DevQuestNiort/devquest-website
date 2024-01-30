export const contacts: Contact[] = [
    {
        "name": "X DevQuest",
        "asset": "social/logo-x.png",
        "type": "RS",
        "link": "https://twitter.com/DevQuestNiort"
    },
    {
        "name": "LinkedIn DevQuest",
        "asset": "social/logo-linkedin.png",
        "type": "RS",
        "link": "https://www.linkedin.com/company/devquest-niort/"
    },
    {
        "name": "Mail",
        "icon": "icon-mail",
        "type": "MAIL",
        "link": "mailto:bureau@devquest.fr"
    }
]

export interface Contact {
    asset?: string;
    icon?: string;
    name: string;
    type: string;
    link: string;
}
