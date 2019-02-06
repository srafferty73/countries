const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countries = new Countries();
  countries.getData();

  const selectElement = document.querySelector('select#countries');
  const selectViewDropdown = new SelectView(selectElement);
  selectViewDropdown.bindEvents();

  const displayElement = document.querySelector('div#country');
  const selectCountryInfo = new DisplayView(displayElement);
  selectCountryInfo.bindEvents();

});
