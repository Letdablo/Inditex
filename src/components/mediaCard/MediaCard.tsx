

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Episode } from '../../types/Types';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import LinearProgressWithLabel from '../linearProgress/LinearProgres';
import './MediaCard.css'
import Modal from '../modal/Modal';


interface MediaCardProps {
  podcastMedia: Episode,
  img: string,
}


export default function MediaCard({ podcastMedia, img }: MediaCardProps) {


  const [rating, setRating] = useState<number>()
  const [play, setPlay] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={podcastMedia.artworkUrl600 || img}
        alt="Live from space album cover"
      />
      <Box className="CardGrid">
        <CardContent className="CardContentGrid">
          <Box>
            <Typography component="div" variant="h5">
              {podcastMedia.trackName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {podcastMedia.artist}
            </Typography>
          </Box>
          <IconButton className="HelpIcon" aria-label="open Datail episode" onClick={() => setOpen(true)}>
            <HelpOutlineIcon color='action' className="Icon" />
          </IconButton>
          <Modal setOpen={setOpen} open={open} episodeDetails={podcastMedia}  ></Modal>
        </CardContent>

        <Box className="CardContentRating">
          <Rating
            color='#DF6589'
            name="simple-controlled"
            defaultValue={podcastMedia.rating}
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue || 0);
            }}
          />
        </Box>

        <LinearProgressWithLabel mediaDuration={podcastMedia.trackTimeMillis} play={play}></LinearProgressWithLabel>

        <Box className="CardPlay">
          <IconButton aria-label="play/pause" onClick={() => setPlay(!play)}>
            {play ? <PauseIcon className="Icon" /> : <PlayArrowIcon className="Icon" />}
          </IconButton>
        </Box>
      </Box>

    </Card>
  );
}