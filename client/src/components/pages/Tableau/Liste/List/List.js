import React from 'react';
import { Paper } from '@material-ui/core';
import Title from './Title';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';
import { Droppable, Draggable } from 'react-beautiful-dnd';

require('./_list.scss');


export default function List({ list, index }) {

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className="root-2" id="id-liste" {...provided.dragHandleProps}>

            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="cardContainer"
                >
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <InputContainer listId={list.id} type="card" />
          </Paper>
        </div>
      )}
    </Draggable>
  );
}
