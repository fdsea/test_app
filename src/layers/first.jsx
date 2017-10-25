import React from 'react';
import { Link } from 'react-router-dom';
import store from './../store';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col } from 'react-bootstrap';

class First extends React.Component{
	constructor(props){
		super(props);
		this.sendData = this.sendData.bind(this);
	}
	sendData(){
		store.dispatch({
			type: "SEND_FIRST",
			payload: {
				name: this.name.value,
				surname: this.surname.value,
				patronymic: this.patronymic.value,
				email: this.email.value,
				phone: this.phone.value
			}
		});
	}
	render(){
		return(
			<Grid>
				<Row>
					<Col xs={12} md={4}>
						<Form>
							<FormGroup>
								<ControlLabel>Имя</ControlLabel>
								<FormControl inputRef ={(input)=>{ this.name = input }}></FormControl>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Фамилия</ControlLabel>
								<FormControl inputRef ={(input)=>{ this.surname = input }}></FormControl>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Отчество</ControlLabel>
								<FormControl inputRef ={(input)=>{ this.patronymic = input }}></FormControl>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Email</ControlLabel>
								<FormControl type="email" inputRef ={(input)=>{ this.email = input }}></FormControl>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Номер телефона</ControlLabel>
								<FormControl type="phone" inputRef ={(input)=>{ this.phone = input }}></FormControl>
							</FormGroup>
						</Form>
						<Link to="/user/second"><Button onClick={this.sendData} bsStyle="success">Next</Button></Link>
					</Col>
				</Row>	
			</Grid>	
		);
	}
}
export default First;