import React from 'react';
import { Button } from '@material-ui/core';

require('./_nav.scss');


export default function TopBar({ setOpen }) {

  return (
    <div className="root-3">
      <Button className="btn-3" onClick={() => setOpen(true)}>
        <h2>Arrière-plan</h2>
      </Button>
    </div>
  );
}
