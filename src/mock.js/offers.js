import {getRandomNumber} from '../util.js';

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '10',
        title: 'Order Uber',
        price: getRandomNumber(100, 1000)
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '11',
        title: 'Add luggage',
        price: getRandomNumber(100, 1000)
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: '12',
        title: 'Choose seats',
        price: getRandomNumber(100, 1000)
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: '13',
        title: 'Choose cabin',
        price: getRandomNumber(100, 1000)
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: '14',
        title: 'Rent a car',
        price: getRandomNumber(100, 1000)
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '15',
        title: 'Upgrade to a business class',
        price: getRandomNumber(100, 1000)
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '16',
        title: 'Add branch',
        price: getRandomNumber(100, 1000)
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: '16',
        title: 'Buy tickets',
        price: getRandomNumber(100, 1000)
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '17',
        title: 'Choose seats',
        price: getRandomNumber(100, 1000)
      }
    ]
  },
];

export {mockOffers};
