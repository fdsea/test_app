import React from 'react';
import { Route, Link} from 'react-router-dom';
import First  from './first';
import Second from './second';
import Third  from './third';
import Final  from './final';
import store  from './../store';


class User extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div>
			    <Route exact path="/user" component={ First} />
				<Route path="/user/first" component={ First } />
				<Route path="/user/second" component={ Second } />
				<Route path="/user/third" component={ Third } />
				<Route path="/user/final" component={ Final } />
			
			</div>
		);
	}
}
export default User;