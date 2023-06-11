import {getRandomNumber} from '../utils/util.js';
import {nanoid} from 'nanoid';

const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order an economy taxi',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a comfort class taxi',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a business class taxi',
        'price': getRandomNumber(100, 1000)
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order a bus for 10 people',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a bus for 30 people',
        'price': getRandomNumber(100, 1000)
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order reserved seat',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a seat in coupe',
        'price': getRandomNumber(100, 1000)
      }
    ]
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order an economy ship',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a comfort class ship',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a business class ship',
        'price': getRandomNumber(100, 1000)
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order an economy car',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a comfort class car',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a business class car',
        'price': getRandomNumber(100, 1000)
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order an economy flight',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a comfort class flight',
        'price': getRandomNumber(100, 1000)
      },
      {
        'id': nanoid(),
        'title': 'Order a business class flight',
        'price': getRandomNumber(100, 1000)
      }
    ]
  },
];


export {mockOffers};
