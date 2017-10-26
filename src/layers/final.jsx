import React from 'react';
import { Link } from 'react-router-dom';
import store from './../store';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col } from 'react-bootstrap';

class Final extends React.Component{
	constructor(props){
		super(props);
		this.sendLocalStorage = this.sendLocalStorage.bind(this);
		
	}
	sendLocalStorage(){
		let sendData = JSON.stringify(store.getState().mainReducer.createData);
    		localStorage.setItem(`form_${Math.random()}`, sendData);
    	
    		store.dispatch({
    		type: "CLEAR"
    		}); 
	}
	render(){
		let data = store.getState().mainReducer.createData;
		return(
			<Grid>
				<Row>
					<Col xs={12} md={4}>
						<h2>Ваши учетные данные:</h2>
							<h3>Имя: {data.name} </h3>
							<h3>Фамилия: {data.surname} </h3>
							<h3>Отчество: {data.patronymic}</h3>
							<p>Email: {data.email}</p>
							<p>Номер телефона: {data.phone}</p>
							<p>Дата рождения: {data.birthday}</p>
							<p>Пол: {data.sex}</p>
							<p>Адрес: {data.address}</p>
							<p>Гражданство: {data.nationality}</p>
							<p>Семейное положение: {data.maritalStatus}</p>
							<img src = {data.firstImg} alt={'profile img'} style={{width: '300px', display: 'block'}}/>
							<img src = {data.secondImg} alt={'profile img'} style={{width: '300px', display: 'block'}}/>
						<Link to="/user/first"><Button onClick={this.sendLocalStorage} bsStyle="success" style={{display: 'block'}}>Все верно?</Button></Link>
					</Col>
				</Row>	
			</Grid>	
		);
	}
}
export default Final;