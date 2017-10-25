import React from 'react';
import { Link } from 'react-router-dom';
import store from './../store';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col} from 'react-bootstrap';

class Second extends React.Component{
	constructor(props){
		super(props);
		this.sendData = this.sendData.bind(this);
		this.changeSexValue = this.changeSexValue.bind(this);
		this.state = {
			sex: 'Мужской'
		};
	}
	changeSexValue(){
		this.setState({
			sex: this.state.sex === "Мужской" ? 'Женский' : 'Мужской'
		})
	}
	sendData(){
		store.dispatch({
			type: "SEND_SECOND",
			payload: {
				birthday: this.birthday.value,
				sex: this.state.sex,
				address: this.address.value
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
								<ControlLabel>Дата рождения</ControlLabel>
								<FormControl placeholder="число /месяц /год/" inputRef ={(input)=>{ this.birthday = input }}></FormControl>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Пол</ControlLabel>{' '}
      							<Radio name="radioGroup" value="Мужской" onChange={this.changeSexValue} checked={this.state.sex === "Мужской"}>мужской</Radio>{' '}
      							<Radio name="radioGroup" value="Женский" onChange={this.changeSexValue} checked={this.state.sex === "Женский"}>женский</Radio>{' '}
      						</FormGroup>
							<FormGroup>
								<ControlLabel>Адрес</ControlLabel>
								<FormControl componentClass="textarea" inputRef ={(input)=>{ this.address = input }}/>
							</FormGroup>
						</Form>
						<Link to="/user/first" style={{marginRight: '1em'}}><Button bsStyle="success">Prev</Button></Link>
						<Link to="/user/third"><Button bsStyle="success" onClick={this.sendData}>Next</Button></Link>
					</Col>
				</Row>	
			</Grid>	
		);
	}
}

export default Second;