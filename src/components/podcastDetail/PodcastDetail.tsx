
import "./PodcastDetail.css"
import { Container, Typography, Grid } from '@mui/material';
import { useFetchEpisodeByPodacastId, useFetchPodcastDataById } from "../../service/app.service";
import MediaCard from "../mediaCard/MediaCard";
import { Link, useParams } from "react-router-dom";
import { Podacast, PodacastDetails } from "../../types/Types";

interface PodcastGridDetailProps {
  podcastId: string;
  dataPodcast: Podacast;
}

export default function PodcastDetail() {
  const { podcastId } = useParams();
  const { loadingPodcast, errorPodcast, dataPodcast, refetchPodcas } = useFetchPodcastDataById("", Number(podcastId));


  if (errorPodcast) return <span>{`An error has occurred: ${errorPodcast.message}`}</span>;
  if (dataPodcast)
    return (
      <div>
        <Link to="/">
          <div className='icon'></div>
        </Link>
        {loadingPodcast ? <div className="lds-ripple" ><div></div><div></div></div > :
          <div>
            <Container maxWidth="md" className='ContainerTitle' >
              <Typography variant="h1" className='TitlePodcast'>
                {`${dataPodcast.title}`}
              </Typography>
            </Container>
            <Container maxWidth="md" className='ContainerDetails' >
              <PodcastGridDetail podcastId={podcastId || "0"} dataPodcast={dataPodcast}></PodcastGridDetail>
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


function PodcastGridDetail({ podcastId, dataPodcast }: PodcastGridDetailProps) {

  const { loadingEpisodes, errorEpisodes, dataEpisodes, refetchEpisodes } = useFetchEpisodeByPodacastId("", Number(podcastId));

  if (loadingEpisodes) return <div className="lds-ripple" ><div></div><div></div></div >;

  if (errorEpisodes) return <span>{`An error has occurred: ${errorEpisodes.message}`}</span>;

  if (dataEpisodes) {
    const dataPodcastDetails: PodacastDetails = { ...dataPodcast, listEpisodies: dataEpisodes }

    return (

      <Grid container spacing={{ xs: 3, md: 5 }} >
        {dataPodcastDetails.listEpisodies?.map((episode, index) => (
          <Grid item xs={12} md={12} key={index} >
            <MediaCard podcastMedia={episode} img={dataPodcastDetails.img} ></MediaCard>
          </Grid>
        ))}
      </Grid>
    )
  }
  else { return <div></div> }
}