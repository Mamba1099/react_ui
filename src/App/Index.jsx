import { withIsMobileViewProvider } from "./Context/provider";
import App from "./App"; // Import the 'App' component

const NamedApp = withIsMobileViewProvider(App); // Add a name to the export statement

export default NamedApp;
