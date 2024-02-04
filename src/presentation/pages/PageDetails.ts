interface PageDetail {
    readonly link: string;
    readonly displayName: string;
}

interface PageDetails {
    readonly home: PageDetail;
}

const pageDetails: PageDetails = {
    home: {
        link: '/',
        displayName: 'home'
    }
}

export default pageDetails;