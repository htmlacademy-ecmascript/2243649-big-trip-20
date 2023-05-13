import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import EditEventView from '../view/edit-event-view.js';
import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventListView = new EventListView();

  constructor({container, pointsModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(this.sortComponent, this.container);
    render(this.eventListView, this.container);
    render(new EditEventView({point: this.points[0]}), this.eventListView.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new PointView({point: this.points[i]}), this.eventListView.getElement());
    }
  }
}

/*this.points.forEach((point) => {
      render(
        new PointView({
         ({point: this.points[i]}),
        this.eventListView.getElement()
      );
    });
  }
}*/
