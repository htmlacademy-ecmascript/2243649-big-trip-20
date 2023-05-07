import {mockDestinations} from '../src/mock.js/destination.js';
import {getRandomRoutPoint} from '../src/mock.js/point.js';
import {mockOffers} from '../src/mock.js/offers.js';
import {POINTS_COUNT} from '../src/const.js';

export default class PointsModel {
  points = Array.from({length: POINTS_COUNT}, getRandomRoutPoint);
  destinations = mockDestinations;
  offers = mockOffers;

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
