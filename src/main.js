import {render, RenderPosition} from './framework/render.js';
import NewPointButtonView from './view/new-point-view.js';
import InfoView from './view/info-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from '../model/model.js';
import FilterModel from '../model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsApiService from '../src/point-api-service.js';

const AUTHORIZATION = 'Basic 2023authorization';
const END_POINT = 'https://20.ecmascript.pages.academy/big-trip';

const tripMainElement = document.querySelector('.trip-main');
const tripControlsFilter = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const filterModel = new FilterModel();
const boardPresenter = new BoardPresenter({
  container: tripEvents,
  pointsModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: tripControlsFilter,
  filterModel,
  pointsModel,
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
  document.querySelector('.event__reset-btn').textContent = 'Cancel';
}

render(new InfoView(), tripMainElement, RenderPosition.AFTERBEGIN);

filterPresenter.init();

boardPresenter.init();
pointsModel.init()
  .finally(() => {
    render(newPointButtonComponent, tripMainElement, RenderPosition.BEFOREEND);
  });
