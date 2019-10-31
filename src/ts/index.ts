import * as View from "./view";
try {
	// Core.launch();
	// LangController.init();
	// Cases.initObservers();

	// initObservers();
	View.render();
} catch (err) {
	console.error(err.message);
}
