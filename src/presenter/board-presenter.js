import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import EditEventView from '../view/edit-event-view.js';
import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view';

const POINT_COUNT = 3;

export default class BoardPresenter {
  sortComponent = new SortView();
  editEventView = new EditEventView();
  eventListView = new EventListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.eventListView, this.container);
    render(this.editEventView, this.eventListView.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new PointView(), this.eventListView.getElement());
    }
  }
}
