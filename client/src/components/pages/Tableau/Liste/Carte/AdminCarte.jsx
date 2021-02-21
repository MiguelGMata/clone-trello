import React, { useState, useEffect } from 'react';
import { Paper, Typography, Collapse } from '@material-ui/core';
import AddCarte from './AddCarte';
import GetCarte from './GetCarte'
import Axios from 'axios';

require('./_carte.scss')


export default function AdminCarte({ listeId, listeT, type }) {

    const liste = listeId
    const [title, setCarte] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cartes = await Axios(`http://localhost:5000/trello-clone/carte/${liste}`);
            if (cartes.data != title) {
                let newArray = title.concat(cartes.data)
                console.log(cartes.data, 'tuntun')
                setCarte(newArray);
            }
        };
        fetchData();
    }, []);

    const [open, setOpen] = useState(false);
    return (
        <div className="root">
            <GetCarte className="carte" listeId={listeId} listeT={listeT} type="card" />
            <Collapse in={open}>
                <AddCarte setOpen={setOpen} listeId={listeId} title={title} setCarte={setCarte} type={type} />
            </Collapse>
            <Collapse in={!open}>
                <Paper
                    className="addCard"
                    elevation={0}
                    onClick={() => setOpen(!open)}
                >
                    <Typography>
                        {'➕ Ajouter une carte'}
                    </Typography>
                </Paper>
            </Collapse>

        </div>
    );
}
/**    */