export interface Podacast {
    'im:name': Text;
    'im:releaseDte': Text;
    'im:artist': Text;
    summary: Text;
    title: Text;
    id: Id;
    'im:image': Image[]
}

interface Text {
    label: string;

}

interface Id {
    label: string;
    attributes: attributesId;
}
interface attributesId {
    'im:id': string;
}
interface Image {
    label: string;
}



export interface Episode {
    id: number;
    collectionId: number;
    idPodcast: number;
    artist: string;
    collectionName: string;
    shortDescription: string;
    description: string;
    trackName: string;
    trackTimeMillis: number
    artworkUrl600?: string;
    artworkUrl160?: string;
    rating?: number;
}

