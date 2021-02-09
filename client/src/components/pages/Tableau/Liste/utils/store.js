const cards = [
  /* {
     id: 'card-1',
     title: 'Première liste',
   },
   {
     id: 'card-2',
     title: 'Deuxième liste',
   },
   {
     id: 'card-3',
     title: 'Troisième liste',
   }*/
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Saisissez le titre de la liste',
      //title: 'Liste 1',
      cards,
    }/*,
    'list-2': {
      id: 'list-2',
      title: 'Liste 2',
      cards: [],
    },*/
  },
  listIds: ['list-1'/*, 'list-2'*/],
};

export default data;

/**

import React, { Component } from 'react'

class data extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      tableaux: [],
      listes: [],
      cards: [],
      data: [],
      listIds: [
        'list-1', {
          id: 'list-1',
          title: 'Saisissez le titre de la liste',
          cards: [],
        }
      ],
      titre: '',
      id: '',
      modalCreerTableau: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.creerListe = this.getListe.bind(this);

  }

  data() {

  };

}

export default data;
*/