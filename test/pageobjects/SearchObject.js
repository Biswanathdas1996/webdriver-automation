const {
  doClick,
  doSetValue,
  doGetAttribute,
  doWaitUntilAttributeEquals,
} = require("../utils/BaseFunctions");
const Elements = require("../Elements/index");

const ExpectChai = require("chai").expect;

class SearchPage {
  async searchFromCity(fromCityText) {
    await doClick(Elements.formCity);
    await doSetValue(Elements.inputFromCity, fromCityText);
    await doClick(await Elements.validateCity(fromCityText));
    await browser.pause(6000);
    await doWaitUntilAttributeEquals(Elements.formCity, "value", fromCityText);
    await browser.pause(6000);
    ExpectChai(await doGetAttribute(Elements.formCity, "value")).to.equal(
      fromCityText
    );
  }

  async searchToCity(toCity) {
    await doSetValue(Elements.inputToCity, toCity);
    await doClick(await Elements.validateCity(toCity));
    await browser.pause(2000);
    await doWaitUntilAttributeEquals(Elements.toCity, "value", toCity);
    ExpectChai(await doGetAttribute(Elements.toCity, "value")).to.equal(toCity);
  }

  async selectDate() {
    await doClick(Elements.seltDate);
  }
}

module.exports = new SearchPage();
