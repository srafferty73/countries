const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function () {
  this.text = null;
}

Countries.prototype.getData = function () {

  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    names= this.text.map((country) => {
      return country.name;
    })
    // console.log(this.text);
    PubSub.publish('Countries:countries-loaded', names);
  });

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    // console.log("Countries model selectedIndex: ", selectedIndex);
    this.publishCountryDetail(selectedIndex);
});
};

Countries.prototype.publishCountryDetail = function (selectedIndex) {
  // console.log(selectedIndex);
  const selectedCountry = this.text[selectedIndex];
  //const selectedCountry = selectedIndex;
  //console.log(selectedCountry);
  PubSub.publish('Countries:selected-country-ready', selectedCountry)
};


module.exports = Countries;
