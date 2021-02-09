import React, { useState } from 'react';
import { Paper, Typography, Collapse } from '@material-ui/core';
import InputCard from './InputCard';

require('./_input.scss')


export default function InputContainer({ listId, type }) {

  const [open, setOpen] = useState(false);
  return (
    <div className="root">
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className="addCard"
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === 'card' ? 'Ajouter une carte' : 'Ajouter une liste'}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}
