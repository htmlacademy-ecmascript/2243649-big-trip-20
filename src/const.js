const POINTS_COUNT = 6;

const DESCRIPTION = [
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Aliquam erat volutpat.',
  'In rutrum ac purus sit amet tempus.'
];

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const SortType = {
  DEFAULT: 'default',
  TIME: 'time',
  PRICE: 'price',
};

const MS_IN_HOUR = 3600000;

export {POINTS_COUNT, DESCRIPTION, FilterType, SortType, MS_IN_HOUR};
