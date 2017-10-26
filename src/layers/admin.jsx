import React from 'react';
import { Route, Link} from 'react-router-dom';
import store  from './../store';
import FormUser from './../components/formUser'
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col } from 'react-bootstrap';

class Admin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			usersKeys: []
		};
	}
	componentWillMount() {
        for (let form in localStorage){
            this.state.usersKeys.push(form);
        }
	}
	render(){
			let usersForms =  this.state.usersKeys.map((value, index)=>{
				let createData = localStorage.getItem(value),
					data = JSON.parse(createData);
				return <FormUser key={index+''} data={data} id = {value} />
			});
		return(
			<Grid>
				<Row>
					<Col xs = {12} md = {4}>
						<FormGroup controlId="formControlsSelect">
							<ControlLabel>Сортировать</ControlLabel>
							<FormControl componentClass="select" placeholder="select">
								<option value="all">Все</option>
								<option value="good">Хорошие</option>
								<option value="bad">Плохие</option>
							</FormControl>
						</FormGroup>
						{usersForms}
					</Col>
				</Row>
			</Grid>
		);
	}
}
export default Admin;