module.exports = class BasePage {
  async doClick(element) {
    await element.waitForDisplayed();
    await element.click();
  }

  async doSetValue(element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
  }

  async doGetAttribute(element, attributeValue) {
    await element.waitForDisplayed();
    return await element.getAttribute(attributeValue);
  }

  async doWaitUntilAttributeEquals(element, attributeValue, attributeText) {
    browser.waitUntil(async function () {
      (await element.getAttribute(attributeValue)) === attributeText,
        {
          timeout: 500000,
          timeoutMsg: "Value did not match",
        };
    });
  }
};
