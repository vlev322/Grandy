import ReactDom from "react-dom";
import { createElement } from "react";

import { IndexComposition } from "./components";

export function render(): void {
	const container = document.getElementById("root");
	const component = createElement(IndexComposition);

	ReactDom.render(component, container);
}
