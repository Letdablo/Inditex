
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Podacast, Episode } from '../../types/Types';
import { Link } from "react-router-dom";



interface CardImgProps {
    data: Podacast | Episode;
}

export default function CardImg({ data }: CardImgProps) {
    const { title, description, img, id } = data
    return (
        <Card className='Card'>
            <Link to={`podcast/${id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color={"#000"} component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>

                    </CardContent>

                </CardActionArea>
            </Link>
        </Card>
    );
}