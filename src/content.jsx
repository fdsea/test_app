import React from 'react';
import { Route, Link} from 'react-router-dom';
import User from './layers/user';
import Admin from './layers/admin';
import store from './store';

class Content extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<main>

			  
			    <Route exact path="/" component={User} />
				<Route path="/user" component={ User } />
				<Route path="/admin" component={ Admin } />
		
			</main>
		);
	}
}
export default Content;