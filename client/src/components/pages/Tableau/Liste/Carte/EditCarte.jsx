import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Modal from 'react-bootstrap/Modal';
import { InputBase } from '@material-ui/core';

require('./_carte.scss')


export default function AdminEditCarte({ carteId, carteArray, listeT }) {
    const carte = carteId
    const listeNom = listeT
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setData] = useState({
        description: '',
        activite: '',
        piece: '',
        id: '',
    });
    const history = useHistory();

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...title,
            [name]: value,
        })
    }


    const setCarteDelete = (carte) => {
        const token = localStorage.getItem('token');
        axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            url: `http://localhost:5000/trello-clone/carte/${carte}`,
            data: title,
        })
            .then(res => {
                const respuesta = res.data.status
                window.alert(respuesta)
                history.push("/tableau");
                handleRefresh()
            })
            .catch(error => {
                console.log(error)
            })
    };



    const setCartePut = (carte) => {
        const token = localStorage.getItem('token');
        axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            url: `http://localhost:5000/trello-clone/carte/${carte}`,
            data: title,
        })
            .then(data => {
                console.log(data, 'miguelito')
                setData({
                    description: data.description,
                    activite: data.activite,
                    piece: data.piece,
                    id: data.id
                })
                handleRefresh()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleRefresh = () => {
        window.location.reload(false);
    }


    return (
        <>
            <p className="etiquete" onClick={handleShow}>{carteArray.piece}</p>
            <p>
                {carteArray.nom}
                <button type="reset" className="btn-effacer" onClick={handleShow}>🖊</button>
            </p>
            <Modal show={show} onHide={handleClose} animation={false}>
                <ModalFooter className="modales" >
                    <span className="span-1" onClick={handleClose}>❌</span>
                </ModalFooter>
                <h6> Dans la liste <Link>{listeNom}</Link></h6>
                <ModalHeader>
                    <h3>{carteArray.nom}</h3>
                    <button type="reset" className="btn-delete" onClick={() => setCarteDelete(carte)} >🚮</button>
                </ModalHeader>
                <form>
                    <InputBase
                        className="input-etiquete"
                        autoFocus
                        type="text"
                        placeholder={"📌 Ajouter une étiquette..."}
                        name="piece"
                        value={carteArray.piece}
                        onChange={handleOnChange}
                    />
                    <ModalBody>
                        <h7>📋 Description</h7>
                        <InputBase
                            className="input"
                            autoFocus
                            fullWidth
                            type="text"
                            placeholder={"Ajouter une description plus detaillée..."}
                            name="description"
                            value={title.description}
                            onChange={handleOnChange}
                        />
                        <Paper id="description">
                            <p> {carteArray.description}</p>
                        </Paper>
                    </ModalBody>
                    <ModalBody>
                        <h7>📄 Activité</h7>
                        <InputBase
                            className="input"
                            autoFocus
                            fullWidth
                            type="text"
                            placeholder="Ecrivez un commentaire..."
                            name="activite"
                            value={title.activite}
                            onChange={handleOnChange}
                        />
                        <Paper id="activite">
                            <p> {carteArray.activite}</p>
                        </Paper>
                    </ModalBody>
                    <ModalFooter className="modales" >
                        <button onClick={() => setCartePut(carte)} type="button" class="btn-card btn btn-success">Enregistrer</button>
                        <Paper>
                            📆 {carteArray.createdAt}
                        </Paper>
                    </ModalFooter>
                </form>
            </Modal>

        </>
    );
}