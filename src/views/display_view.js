const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function (container) {
  this.container = container;
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-ready', (evt) => {
    this.render(evt.detail);
  });

DisplayView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const name = this.createElement('h2', country.name);
  this.container.appendChild(name);

  const img = this.createElement('img');
  img.classList.add('medium-image');
  img.src = country.flag;
  this.container.appendChild(img);

  const regionHeading = this.createElement('h2', "Region:");
  this.container.appendChild(regionHeading);
  const region = this.createElement('p', country.region);
  this.container.appendChild(region);

  const languageHeading = this.createElement('h2', "Languages:");
  this.container.appendChild(languageHeading);
  const languages = this.createElement('p', country.languages[0].name);
  console.log(languages);
  this.container.appendChild(languages);

};

DisplayView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

};

module.exports = DisplayView;
