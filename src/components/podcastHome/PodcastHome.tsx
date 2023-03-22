
import "./PodcastHome.css"
import Grid from '@mui/material/Grid';
import PodcastCard from '../card/CardImg';
import { Container, Typography } from '@mui/material';
import { useFetchPodcastData } from '../../service/app.service';



export default function PodcastHome() {

  return (
    <div>
      <div className='icon'></div>
      <Typography variant="h1" className='TitleApp'>
        Daniel's Podcast
      </Typography>
      <Container maxWidth="lg" className="ContainerHome" >
        <GridPodcast></GridPodcast>
      </Container>
    </div>
  );
}


function GridPodcast() {
  const { loading, error, data, refetch } = useFetchPodcastData("");

  if (loading) return <div className="lds-ripple" ><div></div><div></div></div >;

  if (error) return <span>{`An error has occurred: ${error.message}`}</span>;

  return (
    <Grid container spacing={{ xs: 3, md: 3 }} >
      {data?.map((podcast, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <PodcastCard data={podcast}></PodcastCard>
        </Grid>
      ))}
    </Grid>
  );
}

