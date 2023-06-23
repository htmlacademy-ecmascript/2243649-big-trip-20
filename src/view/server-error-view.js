import AbstractView from '../framework/view/abstract-view.js';

const createErrorTemplate = () => (
  `<p class="trip-events__msg">
     Oops...Something went wrong. Please, try again.
  </p>`
);

export default class ErrorView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createErrorTemplate();
  }
}
