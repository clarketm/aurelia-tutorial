
export class Home {


	constructor() {
		this.height = `${100 - 25}px`;
		this.tableClasses = "table table-bordered table-condensed table-striped table-hover";
		this.message = "Welcome to the world of Aurelia!";
		this.image = "http://aurelia.io/images/main-logo.svg";
		this.name = "";
		this.messageVisible = true;
	}

	toggleMessage(event){
		this.messageVisible = !this.messageVisible;
	}

}