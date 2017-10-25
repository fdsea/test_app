import React from 'react';
import { Link } from 'react-router-dom';
import store from './../store';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col } from 'react-bootstrap';

class Third extends React.Component{
	constructor(props){
		super(props);
		this.sendData = this.sendData.bind(this);
		this.changeMaritalStatus = this.changeMaritalStatus.bind(this);
	}
	changeMaritalStatus(){

	}
	sendData(){
		store.dispatch({
			type: "SEND_THIRD",
			payload: {
				nationality: this.nationality.value,
				maritalStatus: this.maritalStatus.value
			}
		})
	}
	render(){
		return(
			<Grid>
				<Row>
					<Col xs={12} md={4}>
						<Form>
							<FormGroup>
								<ControlLabel>Гражданство</ControlLabel>
								<FormControl inputRef ={(input)=>{ this.nationality = input }}></FormControl>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Семейное положение</ControlLabel>
								<FormControl  componentClass="select" inputRef ={(input)=>{ this.maritalStatus = input }}>
									<option value="холост/не замужем">холост/не замужем</option>
									<option value="состою в браке">состою в браке</option>
								</FormControl>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Фотография №1</ControlLabel>
								<FormControl type="file"></FormControl>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Фотография №2 (самая красивая)</ControlLabel>
								<FormControl type="file"></FormControl>
							</FormGroup>
						</Form>
						<Link to="/user/second"style={{marginRight: '1em'}} ><Button bsStyle="success">Prev</Button></Link>
						<Link to="/user/final"><Button bsStyle="success" onClick={this.sendData}>Next</Button></Link>
					</Col>
				</Row>	
			</Grid>	
		);
	}
}
export default Third;