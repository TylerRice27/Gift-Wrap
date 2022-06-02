import { GiphyController } from "./Controllers/GiphyController.js";
import { SandboxController } from "./Controllers/SandboxController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();


  giphyController = new GiphyController();
  sandboxController = new SandboxController();
}

window["app"] = new App();
