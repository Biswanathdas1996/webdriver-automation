// npx wdio run ./wdio.conf.js
const SearchPage = require("../pageobjects/SearchObject");

describe("Flight booking application", function () {
  it("Select form city", async function () {
    browser.url("/flights/");
    console.log(browser.getTitle());
    browser.maximizeWindow();
    expect(browser).toHaveAttrContaining(
      "Flight Tickets Booking at Lowest Airfare"
    );
  });

  it("Select From City", async function () {
    await SearchPage.searchFromCity("Kolkata");
  });

  it("select to city", async function () {
    await SearchPage.searchToCity("Delhi");
  });

  // it("Select Date", async function () {
  //   await SearchPage.selectDate();
  // });
});
