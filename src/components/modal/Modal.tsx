import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Episode } from '../../types/Types';
import CardImg from '../card/CardImg';

interface ModalProps {
    episodeDetails: Episode,
    open: boolean,
    setOpen: (arg0: boolean) => void,
}


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});



export default function Modal({ open, setOpen, episodeDetails }: ModalProps) {


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <CardImg data={episodeDetails}></CardImg>

        </Dialog>

    );
}