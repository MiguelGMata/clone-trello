import React, { useState, useContext } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import storeApi from '../utils/storeApi';

require('./_input.scss');

export default function InputCard({ setOpen, listId, type }) {

  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    if (type === 'card') {
      addMoreCard(title, listId);
      setTitle('');
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle('');
      setOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Paper className="card-input">
          <InputBase
            onChange={handleOnChange}
            multiline
            onBlur={() => setOpen(false)}
            fullWidth
            className="input"
            value={title}
            placeholder={
              type === 'card'
                ? 'Entrez le titre de cette carte.'
                : 'Entrez le titre de la liste.'
            }
          />
        </Paper>
      </div>
      <div className="confirm">
        <Button className="btnConfirm" onClick={handleBtnConfirm}>
          {type === 'card' ? 'Ajouter une carte' : 'Ajouter une liste'}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
