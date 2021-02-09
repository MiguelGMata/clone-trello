import React from 'react';
import { Paper } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';

require('./_card.scss');

export default function Card({ card, index }) {


  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className="card">{card.title}</Paper>
        </div>
      )}
    </Draggable>
  );
}
