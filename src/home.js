export class Home {

  constructor() {
    this.height = `${100 - 25}px`;
    this.tableClasses = "table table-bordered table-condensed table-striped table-hover";
    this.message = "Hello Aurelia!";
    this.image = "http://aurelia.io/images/main-logo.svg";
    this.name = "";
    this.answerVisible = false;
    this.navAlertVisible = false;
    this.number1 = 1;
    this.number2 = 1;
    this.styleString = "display: inline-block";
    this.styleObject = {width: "5em", display: 'inline-block'};
  }

  get total() {
    return (+this.number1) + (+this.number2);
  }

  set total(value) {
    this._total = value;
  }

  toggleMessage(event) {
    this.answerVisible = !this.answerVisible;
  }

  triggerNavAlert(name) {
    this.navAlertVisible = name.length ? true : false;
    console.log(name.length);
  }

}