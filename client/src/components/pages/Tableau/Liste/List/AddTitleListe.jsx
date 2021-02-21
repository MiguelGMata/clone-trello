import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, InputBase, Paper } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AdminAddListe from './AdminAddListe'
import AdminCarte from '../Carte/AdminCarte'
import { Link } from 'react-router-dom';
import axios from 'axios';

require('./_list.scss');

export default function Title({ tableauId, type }) {

    const liste = tableauId
    const [listes, setData] = useState([]);
    const { id } = useParams();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const listes = await axios(`http://localhost:5000/trello-clone/liste/${liste}`);
            //console.log('lista de tabla', listes)
            setData(listes.data);
        };
        fetchData();
    }, [id]);



    const setCarteDelete = (id) => {
        if (window.confirm("Vous-êtes sûr d'éliminer cet carte ?"));
        const token = localStorage.getItem('token');
        axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            url: `http://localhost:5000/trello-clone/liste/${id}`,
            data: listes,
        })
            .then(res => {
                const respuesta = res.data.status
                handleRefresh();
            })
            .catch(error => {
                console.log(error)
            })
    };

    function handleRefresh() {
        window.location.reload(false);
    }

    return (
        <>
            <div className="editableTitleContainer">
                {listes.map(liste => (
                    <Typography key={liste.id} c
                        onClick={() => setOpen(!open)}
                        className="editableTitle"
                        id="listica"
                    >
                        <ul>
                            <Paper className="papelito">

                                <li className="p">{liste.titre}
                                    <div className="MoreHorizIcon" ><MoreHorizIcon /></div>
                                    <button type="reset" className="btn-delete" onClick={() => setCarteDelete(liste.id)}>🗑</button>
                                    <AdminCarte className="carte" key={liste.id} listeId={liste.id} listeT={liste.titre} type="card" />
                                </li>
                                <div className="a">
                                    <Link >&#128065;   &#128466;   &#128394;   &#9729;</Link>
                                </div>
                            </Paper>
                        </ul>
                    </Typography>
                ))}
                <div className="adminAddListe" >
                    <AdminAddListe tableauId={tableauId} type={type} />
                </div>
            </div>
        </>
    );
}
