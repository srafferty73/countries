const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (evt) => {
    this.render(evt.detail);
  });

  this.container.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
  //  console.log("Select View selectedIndex: ", selectedIndex);
    PubSub.publish('SelectView:change', selectedIndex);
  });

}

SelectView.prototype.render = function (names) {
  console.log(this.container);
  names.forEach((name, index)=> {
    const selectCountries  = document.createElement('option');
    selectCountries.textContent = name;
    selectCountries.value = index;
    this.container.appendChild(selectCountries);
  });
}

module.exports = SelectView;
