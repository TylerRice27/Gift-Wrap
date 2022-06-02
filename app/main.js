import { GiphyController } from "./Controllers/GiphyController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();


  giphyController = new GiphyController();
}

window["app"] = new App();
