
import "./PodcastHome.css"
import Grid from '@mui/material/Grid';
import PodcastCard from '../card/CardImg';
import { Container, Typography } from '@mui/material';
import { getPodcast } from '../../service/app.service';
import { useQuery } from "react-query";
import { Podacast } from "../../types/Types";
import SearchInput from "../search/SearchInput";
import { useState } from 'react';

export default function PodcastHome() {

  return (
    <div>
      <div className='icon'></div>
      <GridPodcast></GridPodcast>
    </div>
  );
}



function GridPodcast() {
  const [podcastFilter, setPodcastFilter] = useState<string>('')
  const { isLoading, error, data, refetch } = useQuery<Podacast[], Error>("podcast", getPodcast);

  const filterPodcast = (data: Podacast[]) => {
    if (podcastFilter === '') return data
    return data.filter(podcast => podcast.title.label.includes(podcastFilter))
  }


  if (isLoading) return <div className="lds-ripple" ><div></div><div></div></div >;
  if (error) return <span>{`An error has occurred: ${error.message}`}</span>;
  if (data)
    return (
      <div>
        <Typography variant="h1" className='TitleApp'>
          Daniel's Podcast
        </Typography>
        <SearchInput setPodcastFilter={setPodcastFilter}></SearchInput>
        <Container maxWidth="lg" className="ContainerHome" >
          <Grid container spacing={{ xs: 3, md: 3 }} >
            {filterPodcast(data)?.map((podcast, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PodcastCard
                  id={podcast.id.attributes['im:id']}
                  description={podcast.summary.label}
                  title={podcast.title.label}
                  image={podcast['im:image'][2].label}
                ></PodcastCard>
              </Grid>

            ))}
          </Grid>
        </Container>
      </div>
    );
  else
    return <span>{`An error has occurred`}</span>
}

