import React, { useState } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

require('../Carte/_carte.scss');

export default function AddListe({ tableauId, setOpen }) {

    const liste = tableauId
    //console.log(liste, 'tutu========>')
    const history = useHistory();
    const [inputs, setInputs] = useState({
        titre: '',
    });


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        await axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            url: `http://localhost:5000/trello-clone/liste/${liste}`,
            data: inputs,
        });
        handleRefresh();
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    function handleRefresh() {
        window.location.reload(false);
    }

    return (
        <>
            <form method="post" onSubmit={handleFormSubmit}>
                <Paper className="card-input" >
                    <InputBase
                        multiline
                        autoFocus
                        onBlur={() => setOpen(false)}
                        fullWidth
                        type='text'
                        className="input"
                        value={inputs.titre}
                        name="titre"
                        onChange={handleInputChange}
                        placeholder={"Saisissez un titre pour cette liste"}
                    />
                </Paper>
                <div className="confirm">
                    <Button className="btnConfirm" type="submit" onSubmit={handleFormSubmit}>
                        {'Ajouter une liste'}
                    </Button>
                    <IconButton onClick={() => setOpen(false)}>
                        <ClearIcon />
                    </IconButton>
                </div>
            </form>
        </>
    );
}
