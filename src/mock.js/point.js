import {mockOffers} from './offers';
import {getRandomArrayElement, getRandomNumber} from '../utils/util.js';
import {nanoid} from 'nanoid';

const mockPoints = [
  {
    id: '1',
    price: getRandomNumber(50, 500),
    type: 'train',
    dateFrom: '2023-04-24T18:25',
    dateTo: '2023-04-24T22:36',
    destination: '10',
    isFavorite: false,
    offers: [
      mockOffers[2].offers[0].id
    ]
  },
  {
    id: '2',
    price: getRandomNumber(50, 500),
    type: 'drive',
    dateFrom: '2023-04-26T22:55',
    dateTo: '2023-04-27T02:18',
    destination: '14',
    isFavorite: true,
    offers: [
      mockOffers[4].offers[0].id,
      mockOffers[4].offers[2].id
    ]
  },
  {
    id: '3',
    price: getRandomNumber(50, 500),
    type: 'taxi',
    dateFrom: '2023-05-03T04:28',
    dateTo: '2023-05-03T08:52',
    destination: '10',
    isFavorite: false,
    offers: [
      mockOffers[0].offers[1].id
    ]
  },
  {
    id: '4',
    price: getRandomNumber(50, 500),
    type: 'ship',
    dateFrom: '2023-05-04T17:31',
    dateTo: '2023-05-04T21:43',
    destination: '12',
    isFavorite: false,
    offers: [
      mockOffers[3].offers[1].id,
      mockOffers[3].offers[2].id
    ]
  },
  {
    id: '5',
    price: getRandomNumber(50, 500),
    type: 'bus',
    dateFrom: '2023-05-06T23:14',
    dateTo: '2023-05-07T05:17',
    destination: '11',
    isFavorite: true,
    offers: [
      mockOffers[1].offers[1].id
    ]
  },
  {
    id: '6',
    price: getRandomNumber(50, 500),
    type: 'flight',
    dateFrom: '2023-05-10T14:38',
    dateTo: '2023-05-10T19:20',
    destination: '13',
    isFavorite: true,
    offers: [
      mockOffers[5].offers[0].id,
      mockOffers[5].offers[1].id
    ]
  },
  {
    id: '7',
    price: getRandomNumber(50, 500),
    type: 'taxi',
    dateFrom: '2023-05-12T13:41',
    dateTo: '2023-05-12T16:05',
    destination: '10',
    isFavorite: true,
    offers: [
      mockOffers[0].offers[1].id,
      mockOffers[0].offers[2].id
    ]
  },
  {
    id: '8',
    price: getRandomNumber(50, 500),
    type: 'train',
    dateFrom: '2023-05-15T18:34',
    dateTo: '2023-05-15T21:09',
    destination: '14',
    isFavorite: false,
    offers: [
      mockOffers[2].offers[0].id,
      mockOffers[2].offers[1].id
    ]
  },
  {
    id: '9',
    price: getRandomNumber(50, 500),
    type: 'drive',
    dateFrom: '2023-05-16T08:55',
    dateTo: '2023-05-16T11:39',
    destination: '12',
    isFavorite: false,
    offers: [
      mockOffers[4].offers[0].id,
      mockOffers[4].offers[1].id
    ]
  },
  {
    id: '10',
    price: getRandomNumber(50, 500),
    type: 'ship',
    destination: '10',
    dateFrom: '2023-05-21T22:51',
    dateTo: '2023-05-22T03:47',
    isFavorite: false,
    offers: [
      mockOffers[3].offers[0].id
    ]
  }
];

function getRandomRoutPoint() {
  return {
    ...getRandomArrayElement(mockPoints),
    id: nanoid(),
  };
}


export {getRandomRoutPoint};
