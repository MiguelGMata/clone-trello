import React, { useState, useContext } from 'react';
import { Typography, InputBase } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import storeApi from '../utils/storeApi';
require('./_list.scss');

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(storeApi);

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            className="input"
            fullWidth
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div className="editableTitleContainer">

          <Typography
            onClick={() => setOpen(!open)}
            className="editableTitle"
          >
            {title}
          </Typography>

          <div className="MoreHorizIcon" ><MoreHorizIcon /></div>

        </div>

      )}
    </div>
  );
}
