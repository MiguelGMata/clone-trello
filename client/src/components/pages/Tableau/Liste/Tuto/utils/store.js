const cards = [
  {
    id: 'card-1',
    title: 'Venezuela',
  },
  {
    id: 'card-2',
    title: 'Mexique',
  },
  {
    id: 'card-3',
    title: 'Colombie',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Amerique',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Europe',
      cards: [],
    },
  },
  listIds: ['list-1', 'list-2'],
};

export default data;
