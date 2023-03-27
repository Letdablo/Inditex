
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Podacast, Episode } from '../../types/Types';
import { Link } from "react-router-dom";
import './Card.css'


interface CardImgProps {
    id: string;
    image: string;
    title: string;
    description: string
}
//podcast.id.attributes['im:id']
export default function CardImg({ id, image, title, description }: CardImgProps) {
    return (
        <Card className='Card'>
            <Link to={`podcast/${id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
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