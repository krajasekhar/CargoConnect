import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import SimpleStorage from "react-simple-storage";
// import 'bootswatch/dist/cerulean/bootstrap.min.css';
// import "https://unpkg.com/@salesforce-ux/design-system@1.0.3/assets/styles/salesforce-lightning-design-system-ltng.min.css";
// import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';
import allreducers from './reducers';
import App from './app';

const store = createStore(
	allreducers
);
class Client extends React.Component {
	render() {
		// console.info(store.getState());
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

ReactDOM.render(<Client />, document.getElementById("root"));