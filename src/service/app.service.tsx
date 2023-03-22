
import { AxiosError } from 'axios';
import { useEffect, useState } from "react";
import { Episode, Podacast, PodacastDetails } from "../types/Types";

export function useFetchPodcastData(url: string) {
    const [data, setData] = useState<Podacast[]>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState<boolean>(true);
    const [shouldRefetch, setRefetch] = useState<number>(1);

    const refetch = () => {
        setRefetch(shouldRefetch + 1);
    };

    useEffect(() => {

        (async function () {

            try {
                setLoading(true);
                //simulate a API call
                const response = await new Promise<Podacast[]>((resolve, reject) => {
                    setTimeout(() => resolve(podcastData), Math.random() * 1000)
                })
                setData(response);
            } catch (error) {
                const err = error as AxiosError
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, shouldRefetch]);

    return { data, error, loading, refetch };
}

export function useFetchPodcastDataById(url: string, id: number) {
    const [data, setData] = useState<Podacast>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState<boolean>(true);
    const [shouldRefetch, setRefetch] = useState<number>(1);

    const refetch = () => {
        setRefetch(shouldRefetch + 1);
    };

    useEffect(() => {

        (async function () {

            try {
                setLoading(true);
                //simulate a API call
                const response = await new Promise<Podacast>((resolve, reject) => {
                    setTimeout(() => {
                        const podcast = podcastData.find(podcast => podcast.id === id)
                        podcast ? resolve(podcast) : reject('no valid ID')
                    }, Math.random() * 1000)
                })
                setData(response);
            } catch (error) {
                const err = error as AxiosError
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, shouldRefetch, id]);

    return { loadingPodcast: loading, errorPodcast: error, dataPodcast: data, refetchPodcas: refetch }

}

export function useFetchEpisodeByPodacastId(url: string, id: number) {
    const [data, setData] = useState<Episode[]>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState<boolean>(true);
    const [shouldRefetch, setRefetch] = useState<number>(1);

    const refetch = () => {
        setRefetch(shouldRefetch + 1);
    };

    useEffect(() => {

        (async function () {

            try {
                setLoading(true);
                //simulate a API call
                const response = await new Promise<Episode[]>((resolve, reject) => {
                    setTimeout(() => {
                        const podcast = listEpisodies.filter(episode => episode.idPodcast === id)
                        podcast ? resolve(podcast) : reject('no valid ID')
                    }, Math.random() * 4000)
                })
                setData(response);
            } catch (error) {
                const err = error as AxiosError
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, shouldRefetch, id]);

    return { loadingEpisodes: loading, errorEpisodes: error, dataEpisodes: data, refetchEpisodes: refetch }

}

export function useFetchEpisodeBytId(url: string, id: number) {
    const [data, setData] = useState<Episode>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState<boolean>(true);
    const [shouldRefetch, setRefetch] = useState<number>(1);

    const refetch = () => {
        setRefetch(shouldRefetch + 1);
    };

    useEffect(() => {

        (async function () {

            try {
                setLoading(true);
                //simulate a API call
                const response = await new Promise<Episode>((resolve, reject) => {
                    setTimeout(() => {
                        const podcast = listEpisodies.find(episode => episode.id === id)
                        podcast ? resolve(podcast) : reject('no valid ID')
                    }, Math.random() * 1000)
                })
                setData(response);
            } catch (error) {
                const err = error as AxiosError
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, shouldRefetch, id]);

    return { loadingEpisode: loading, errorEpisode: error, dataEpisode: data, refetchEpisode: refetch }

}

const podcastData: Podacast[] = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)'

    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)'

    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)'

    }

];


const listEpisodies: Episode[] = [
    {
        artist: 'Daniel',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',

        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        id: 1,
        idPodcast: 1,
        mediaDuration: 95000,
        title: "Burguer",
        rating: 4,
    },
    {
        artist: 'Daniel',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        id: 14,
        idPodcast: 1,
        mediaDuration: 95000,
        title: "Burguer",
        rating: 4,
    },
    {
        artist: 'Daniel',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        id: 12,
        idPodcast: 1,
        mediaDuration: 95000,
        title: "Burguer",
        rating: 4,
    },
    {
        artist: 'Daniel',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        id: 13,
        idPodcast: 1,
        mediaDuration: 95000,
        title: "Burguer",
        rating: 4,
    },
    {
        artist: 'Daniel',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        id: 14,
        idPodcast: 1,
        mediaDuration: 95000,
        title: "Burguer",
        rating: 4,
    },
    {
        artist: 'Daniel',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        id: 15,
        idPodcast: 1,
        mediaDuration: 95000,
        title: "Burguer",
        rating: 4,
    },
    {
        artist: 'Daniel',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        id: 16,
        idPodcast: 1,
        mediaDuration: 95000,
        title: "Burguer",
        rating: 4,
    },
    {
        artist: 'Daniel',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        id: 17,
        idPodcast: 1,
        mediaDuration: 95000,
        title: "Burguer",
        rating: 4,
    },
    {
        artist: 'Daniel',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        id: 2,
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        idPodcast: 1,
        mediaDuration: 125000,
        title: "Burguer",
        rating: 5,
    },
    {
        artist: 'Daniel',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        id: 3,
        idPodcast: 1,
        mediaDuration: 455000,
        title: "Burguer",
        rating: 3,
    },
    {
        artist: 'Daniel',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        id: 4,
        idPodcast: 2,
        mediaDuration: 45000,
        title: "Burguer"
    },
    {
        artist: 'Daniel',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        id: 5,
        idPodcast: 2,
        mediaDuration: 45000,
        title: "Burguer"
    },
]