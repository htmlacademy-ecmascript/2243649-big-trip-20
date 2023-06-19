import {mockDestinations} from '../src/mock.js/destination.js';
import {getRandomRoutPoint} from '../src/mock.js/point.js';
import {mockOffers} from '../src/mock.js/offers.js';
import {POINTS_COUNT} from '../src/const.js';
import Observable from '../src/framework/observable.js';

export default class PointsModel extends Observable {
  /*constructor() {
    this.points = Array.from({length: POINTS_COUNT}, getRandomRoutPoint);
    this.destinations = mockDestinations;
    this.offers = mockOffers;*/
  #points = Array.from({length: POINTS_COUNT}, getRandomRoutPoint);
  #offers = mockOffers;
  #destinations = mockDestinations;
  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  }

  addPoint(updateType, update) {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  }
}
