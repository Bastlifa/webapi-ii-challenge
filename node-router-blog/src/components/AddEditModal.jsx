import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import { TextField, Button } from '@material-ui/core';
import { white } from 'colorette';
import { ModalDiv } from './PostStyles'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: white,//theme.palette.background.paper,
        height: '500px',
        width: '1000px',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },

}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: props.modalOpen ? 1 : 0 },
        onStart: () => {
        if (props.modalOpen && onEnter) {
            onEnter();
        }
        },
        onRest: () => {
        if (!props.modalOpen && onExited) {
            onExited();
        }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
        {children}
        </animated.div>
    );
});

export default function AddEditModal(props) {
    const classes = useStyles();
    
    const [text, setText] = useState(props.textPrePop)

    const handleOpen = () => {
        props.setModalOpen(true);
    };

    const handleClose = () => {
        props.setModalOpen(false);
    };

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={props.modalOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={props.modalOpen}>
            {/* <div className={classes.paper}> */}
            <ModalDiv>
                <p>Test</p>
                <TextField
                    id="standard-name"
                    label="text"
                    className={classes.textField}
                    value={text}
                    margin="normal"
                />
                <button>{props.btnText}</button>
            </ModalDiv>
            {/* </div> */}
            </Fade>
        </Modal>
    );
}