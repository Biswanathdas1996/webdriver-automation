class Elements {
  get formCity() {
    return $("#fromCity");
  }

  get inputFromCity() {
    return $("input[placeholder='From']");
  }

  async validateCity(value) {
    return $(`//li[@role = 'option']/div/div/p[contains(text(),'${value}')]`);
  }

  get valFromCity() {
    return $$("li[role='option'] div div p:nth-child(1)");
  }

  get toCity() {
    return $("#toCity");
  }

  get inputToCity() {
    return $("input[placeholder='To']");
  }

  get dayPicker() {
    return $(".DatPicker-Body");
  }

  get seltDate() {
    return $("//*[@aria-lable='Sat Jun 04 2022']");
  }
}

module.exports = new Elements();
