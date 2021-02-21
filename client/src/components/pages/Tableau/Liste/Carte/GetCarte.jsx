import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import EditCarte from './EditCarte'
import { Paper } from '@material-ui/core';

require('./_carte.scss');

export default function GetCarte({ listeId, listeT }) {
    const liste = listeId
    const [title, setCarte] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cartes = await Axios(`http://localhost:5000/trello-clone/carte/${liste}`)
            if (cartes.data != title) {
                let newArray = title.concat(cartes.data)
                console.log(cartes.data, 'tuntun')
                setCarte(newArray);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="paper">
                {title.map(carte => (
                    <Paper key={carte.id} className="carte" id="cart"  >
                        <p>
                            <EditCarte
                                key={carte.id}
                                carteId={carte.id}
                                carteArray={carte}
                                listeId={liste}
                                listeT={listeT}
                                type="carte"
                                title={title}
                                setCarte={setCarte}
                            />
                        </p>
                    </Paper>
                ))}
            </div>
        </>
    );
}

