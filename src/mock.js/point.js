import {getRandomArrayElement, getRandomNumber} from '../util.js';
import {TYPES} from '../const.js';

const mockPoints = [
  {
    id: '1',
    basePrice: getRandomNumber(100, 1000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 1,
    isFavorite: false,
    offers: [2],
    type: getRandomArrayElement(TYPES),
  },
  {
    id: '2',
    basePrice: getRandomNumber(100, 1000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 2,
    isFavorite: false,
    offers: [],
    type: getRandomArrayElement(TYPES),
  },
  {
    id: '3',
    basePrice: getRandomNumber(100, 1000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 3,
    isFavorite: false,
    offers: [1, 2, 3, 4],
    type: getRandomArrayElement(TYPES),
  },
  {
    id: '4',
    basePrice: getRandomNumber(100, 1000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 4,
    isFavorite: false,
    offers: [1, 2],
    type: getRandomArrayElement(TYPES),
  },
  {
    id: '5',
    basePrice: getRandomNumber(100, 1000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 5,
    isFavorite: false,
    offers: [],
    type: getRandomArrayElement(TYPES),
  }
];

const getRandomRoutPoint = () => getRandomArrayElement(mockPoints);

export {getRandomRoutPoint};
