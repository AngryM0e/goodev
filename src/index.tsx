import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { App } from './app';

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);