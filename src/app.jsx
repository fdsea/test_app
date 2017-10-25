import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { createStore, dispatch, getState} from 'redux';
import { Provider } from 'react-redux';
import store from './store';
import 'react-select/dist/react-select.css';
import Header from './header';
import Content from './content';

const history = createBrowserHistory();



class App extends React.Component {
	constructor(props){
		super(props);
	}
    
	render(){
		console.log(store.getState());
		return(
			<Router history={history}>
				<div>
					<Header />
					<Content />
				</div>
			</Router>   
  		);
	}
};
const renderApp = () => {
	render(<App />, document.getElementById('app-root'));
}
store.subscribe(renderApp);
renderApp();