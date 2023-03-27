
import "./PodcastDetail.css"
import { Container, Typography, Grid } from '@mui/material';
import { getEpisodesPodcastById } from "../../service/app.service";
import MediaCard from "../mediaCard/MediaCard";
import { Link, useParams } from "react-router-dom";
import { Podacast, Episode } from "../../types/Types";
import { useQuery } from "react-query";

interface PodcastGridDetailProps {

  dataPodcast: Episode[];
}

export default function PodcastDetail() {
  const { podcastId } = useParams();
  const { isLoading, error, data, refetch } = useQuery<Episode[], Error>(['Episodes', podcastId], () => getEpisodesPodcastById(podcastId || ''));
  if (error) return <span>{`An error has occurred: ${error.message}`}</span>;
  if (isLoading) return <div className="lds-ripple" ><div></div><div></div></div >;
  if (data)
    return (
      <div>
        <Link to="/">
          <div className='icon'></div>
        </Link>
        {isLoading && !data ? <div className="lds-ripple" ><div></div><div></div></div > :
          <div>
            <Container maxWidth="md" className='ContainerTitle' >
              <Typography variant="h1" className='TitlePodcast'>
                {`${data[0].collectionName}`}
              </Typography>
            </Container>
            <Container maxWidth="md" className='ContainerDetails' >
              {<PodcastGridDetail dataPodcast={data}></PodcastGridDetail>}
            </Container>
          </div >
        }
      </div >
    );
  else
    return (
      <div></div >
    );
}


function PodcastGridDetail({ dataPodcast }: PodcastGridDetailProps) {


  return (
    <Grid container spacing={{ xs: 3, md: 5 }} >
      {dataPodcast?.map((episode, index) => (
        <Grid item xs={12} md={12} key={index} >
          <MediaCard podcastMedia={episode} img={episode.artworkUrl600 || ''} ></MediaCard>
        </Grid>
      ))}
    </Grid>
  )

}