import {convertDateTimePoint} from '../utils/util.js';

import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function createOffer (offers) {
  return (
    `${offers.map((offer) => `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${offer.checked ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`).join('')}`
  );
}

function createImgDescription (destination) {
  return (
    `${Object.entries(destination.pictures).map((value, index) => `
    <img class="event__photo" src="${destination.pictures[index].src}" alt="${destination.pictures[index].description}">`).join('')}`
  );
}

function createTypeList(value, typePoint) {
  const {type} = value;
  return (
    `<div class="event__type-item">
    <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${type === typePoint ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${type.charAt(0).toUpperCase() + type.slice(1)}</label>
  </div>
    `
  );
}

function createDestinationList (value) {
  return (
    `<option value="${value}"></option>`
  );
}

function createEditEventTemplate(point) {
  const {type, price, destination, offers, dateFrom, dateTo, allOffers, allDestinations} = point;
  const offerType = allOffers.find((typeOffer) => typeOffer.type === type);

  const offersData = offerType.offers.map((offer) => ({
    ...offer,
    checked: offers.includes(offer.id),
  })
  );

  const uniqueDestination = allDestinations.find((oneDestination) => oneDestination.id === destination);

  const timeFrom = convertDateTimePoint(dateFrom);
  const timeTo = convertDateTimePoint(dateTo);
  const repeatingOffer = createOffer(offersData);
  const repeatingImg = createImgDescription(uniqueDestination);

  const typeItemsTemplate = allOffers
    .map((value) => createTypeList(value, type))
    .join('');

  const destinationsTemplate = allDestinations
    .map((value) => createDestinationList(value.name))
    .join('');

  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${typeItemsTemplate}
          </fieldset>
        </div>
      </div>
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${uniqueDestination.name}" list="destination-list-1">
        <datalist id="destination-list-1">
          ${destinationsTemplate}
        </datalist>
      </div>
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${timeFrom}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${timeTo}">
      </div>
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
        ${offers.length !== 0 ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3><div class="event__available-offers">${repeatingOffer}</div></section>` : ''}
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${uniqueDestination.description}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${repeatingImg}
          </div>
        </div>
      </section>
    </section>
  </form>
  </li>`
  );
}

export default class EditEventView extends AbstractStatefulView {
  #point = null;
  #handleFormSubmit = null;
  #offers = null;
  #destinations = null;
  #datepickerDateFrom = null;
  #datepickerDateTo = null;
  #handleCloseFormClick = null;

  constructor({point, offers, destinations, onFormSubmit, onCloseClick}) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    this._setState(EditEventView.parsePointToState(point, offers, destinations));
    this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseFormClick = onCloseClick;
    this._restoreHandlers();
  }

  get template() {
    return createEditEventTemplate(this._state);
  }

  removeElement() {
    super.removeElement();

    if (this.#datepickerDateFrom) {
      this.#datepickerDateFrom.destroy();
      this.#datepickerDateFrom = null;
    }

    if (this.#datepickerDateTo) {
      this.#datepickerDateTo.destroy();
      this.#datepickerDateTo = null;
    }
  }

  reset(point, offers, destinations) {
    this.updateElement(
      EditEventView.parsePointToState(point, offers, destinations),
    );
  }

  _restoreHandlers(){
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#handleCloseFormClick);
    this.element.querySelector('.event__type-list')
      .addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChangeHandler);

    this.#setDatepicker();
  }

  #typeChangeHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      type: evt.target.value,
    });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const destination = this.#destinations.find((value) => value.name.toLowerCase() === evt.target.value.toLowerCase());
    if (destination) {
      this.updateElement({
        destination: destination.id,
      });
    }
  };

  #dateFromChangeHandler = ([userDate]) => {
    this.updateElement({
      dateFrom: userDate,
    });
  };

  #dateToChangeHandler = ([userDate]) => {
    this.updateElement({
      dateTo: userDate,
    });
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditEventView.parseStateToPoint(this._state));
  };

  #setDatepicker() {
    this.#datepickerDateFrom = flatpickr(
      this.element.querySelector('.event__input--time[id="event-start-time-1"]'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: convertDateTimePoint(this._state.dateFrom),
        onChange: this.#dateFromChangeHandler,
      },
    );

    this.#datepickerDateTo = flatpickr(
      this.element.querySelector('.event__input--time[id="event-end-time-1"]'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: convertDateTimePoint(this._state.dateTo),
        onChange: this.#dateToChangeHandler,
      },
    );
  }

  static parsePointToState(point, allOffers, allDestinations) {
    return {...point, allOffers, allDestinations
    };
  }

  static parseStateToPoint(state) {
    const point = {...state};

    return point;
  }
}
