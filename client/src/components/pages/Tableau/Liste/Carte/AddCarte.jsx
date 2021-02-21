import React, { useState } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import axios from 'axios';

require('./_carte.scss');

export default function AddCarte({
    setOpen,
    listeId,
    title,
    setCarte
}) {
    const liste = listeId

    const [inputs, setTitle] = useState({
        nom: '',
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setTitle({
            ...inputs,
            [name]: value,
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        await axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            url: `http://localhost:5000/trello-clone/carte/${liste}`,
            data: inputs,
        })
            .then(result => {
                let newArray = title.concat(result.data)// pour creer un nouvell table 
                setCarte(newArray)
            })
        handleRefresh();
        //history.push('/tableau');

    };
    const handleRefresh = () => {
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
                        value={inputs.nom}
                        name="nom"
                        onChange={handleOnChange}
                        placeholder={"Saisissez un titre pour cette carte"}
                    />
                </Paper>
                <div className="confirm">
                    <Button className="btnConfirm" type="submit" onSubmit={handleFormSubmit}>
                        {'Ajouter une carte'}
                    </Button>
                    <IconButton onClick={() => setOpen(false)}>
                        <ClearIcon />
                    </IconButton>
                </div>
            </form>
        </>
    );
}
