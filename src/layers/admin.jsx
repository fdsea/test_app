import React from 'react';
import { Route, Link} from 'react-router-dom';
import store  from './../store';
import FormUser from './../components/formUser'
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col } from 'react-bootstrap';

class Admin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			usersKeys: [],
			sortValue: this.beginVal
		};
		this.sortValueChange = this.sortValueChange.bind(this);
	}
	sortValueChange(e){
		this.setState({
			sortValue: e.target.value
		})
	}
	componentWillMount() {
        for (let form in localStorage){
            this.state.usersKeys.push(form);
        }
	}
	render(){
		console.log(this.state.sortValue);
			let usersForms =  this.state.usersKeys.map((value, index)=>{
				let createData = localStorage.getItem(value),
					data = JSON.parse(createData);
				return <FormUser key={index+''} data={data} id = {value} display = {true}/>
			});
		return(

			<Grid>
				<Row>
					<Col xs = {12} md = {4}>
						<FormGroup controlId="formControlsSelect">
							<ControlLabel>Сортировать</ControlLabel>
							<FormControl componentClass="select" placeholder="select" onChange={this.sortValueChange} inputRef = {(input)=>{this.beginVal = input}}>
								<option value="all" checked>Все</option>
								<option value="read">Прочитано</option>
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