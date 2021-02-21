import React, { useState } from 'react'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { InputBase, Paper } from '@material-ui/core';

export default function Modals() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                🖊
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <ModalFooter>
                    <span className="span-1" onClick={handleClose}>❌</span>
                </ModalFooter>
                <ModalHeader>
                    <ModalTitle>Titre Carte</ModalTitle>🗑
                </ModalHeader>
                <ModalHeader>
                    <h5>Dans la liste Lista A</h5>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <h6>Description</h6>
                        <InputBase
                            className="input"
                            autoFocus
                            fullWidth
                            type="text"
                            placeholder="Ajouter une description plus detaillée"
                            name="titre"
                        />
                        <Button variant="primary" onClick={handleClose}>
                            Enregistrer
                        </Button>
                    </div>
                    <Paper>Description</Paper>

                </ModalBody>

                <ModalBody>
                    <div>
                        <h6>Activité</h6>
                        <InputBase
                            className="input"
                            autoFocus
                            fullWidth
                            type="text"
                            placeholder="Ecrivez un commentaire"
                            name="titre"
                        />
                        <Button variant="primary" onClick={handleClose}>
                            Enregistrer
                        </Button>
                    </div>
                    <Paper >Activité</Paper>
                </ModalBody>
            </Modal>
        </>
    );
}