export interface Podacast {
    title: string;
    description: string;
    img: string;
    id: number;
}

export interface Episode {
    id: number;
    idPodcast: number;
    artist: string;
    title: string;
    description: string;
    mediaDuration: number
    img?: string;
    rating?: number;
}


export interface PodacastDetails extends Podacast {
    listEpisodies: Episode[]
}