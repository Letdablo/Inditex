

import axios from "axios";



export function getPodcast() {
    return axios.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json").then((res) => res.data.feed.entry);
}


export function getEpisodesPodcastById(podcastId: string) {
    return axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)).then((res) => JSON.parse(res.data.contents).results);
}
