import React, { useState } from 'react';
import { Paper, Typography, Collapse } from '@material-ui/core';
import AddListe from './AddListe';

require('../Carte/_carte.scss')


export default function AdminCarte({ tableauId, type }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="root">
            <Collapse in={open}>
                <AddListe setOpen={setOpen} tableauId={tableauId} type={type} />
            </Collapse>
            <Collapse in={!open}>
                <Paper
                    className="addCard"
                    elevation={0}
                    onClick={() => setOpen(!open)}
                >
                    <Typography>
                        {'➕ Ajoutez une autre liste'}
                    </Typography>
                </Paper>
            </Collapse>
        </div>
    );
}