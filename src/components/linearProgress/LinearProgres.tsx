import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './LinearProgress.css'

interface LinearProgressWithLabelProps {
    mediaDuration: number
    play: boolean;
}


export default function LinearProgressWithLabel({ mediaDuration, play }: LinearProgressWithLabelProps) {
    const [progress, setProgress] = useState(0);
    const roundMediaDuration = mediaDuration - (mediaDuration % 1000)
    React.useEffect(() => {
        const timer = setInterval(() => {
            if (play)
                setProgress((prevProgress) => (prevProgress * 1000 >= roundMediaDuration ? prevProgress : prevProgress + 1));
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [play]);


    var minutes: number = Math.floor((roundMediaDuration - progress * 1000) / 60000);
    var seconds = Number((((roundMediaDuration - progress * 1000) % 60000) / 1000).toFixed(0))

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: '100%', mr: 1, minWidth: 100, paddingLeft: 2 }} >
                    <LinearProgress variant="determinate" value={(progress * 1000 / (roundMediaDuration)) * 100} className={'LinearProgress'} />
                </Box>
                <Box sx={{ minWidth: 35 }} >
                    <Typography variant="body2" color="text.secondary">{`${minutes + ":" + (seconds < 10 ? '0' : '') + seconds}`}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

