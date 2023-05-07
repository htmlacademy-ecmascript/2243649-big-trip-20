import {DESCRIPTION} from '../const.js';
import {getRandomArrayElement, getRandomNumber} from '../util.js';

const mockDestinations = [
  {
    id: '71',
    description: getRandomArrayElement(DESCRIPTION),
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: getRandomArrayElement(DESCRIPTION)
      }
    ]
  },
  {
    id: '72',
    description: getRandomArrayElement(DESCRIPTION),
    name: 'Rome',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: getRandomArrayElement(DESCRIPTION)
      }
    ]
  },
  {
    id: '73',
    description: getRandomArrayElement(DESCRIPTION),
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: getRandomArrayElement(DESCRIPTION)
      }
    ]
  },
  {
    id: '74',
    description: getRandomArrayElement(DESCRIPTION),
    name: 'Tokyo',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: getRandomArrayElement(DESCRIPTION)
      }
    ]
  },
  {
    id: '75',
    description: getRandomArrayElement(DESCRIPTION),
    name: 'Oslo',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: getRandomArrayElement(DESCRIPTION)
      }
    ]
  }
];

export {mockDestinations};
