import React from 'react';
import Modal from '@material-ui/core/Modal';
import { styled } from "twin.macro";
import PropTypes from "prop-types";

const ModalFrame = styled(Modal)`
    margin-top: 10%;
    margin-bottom: 10%;
    margin-left: 15%;
    margin-right: 15%;
`

const InnerModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.palette.primary.main};
    background-color: white;
    padding: 20px;
`

const PharmDModal = props => {

    return (
        <ModalFrame open={props.open}
                    onBackdropClick={props.onClose}
                    aria-labelledby={props.title}
                    aria-describedby="PharmD Modal View"
        >
            <InnerModal>
                {typeof props.title === "string" ?
                    <h2>{props.title}</h2>
                    : props.title
                }
                {props.children}
            </InnerModal>
        </ModalFrame>
    )
}

PharmDModal.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    open: PropTypes.bool,
    onClose: PropTypes.func,
}

PharmDModal.defaultProps = {
    title: "",
    open: false,
    onClose: null
}

export default PharmDModal;