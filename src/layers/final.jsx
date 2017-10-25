import React from 'react';
import store from './../store';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table } from 'react-bootstrap';

const Final = () => {
	
		return(
			<Form>
			<FormGroup>
				<ControlLabel> Name </ControlLabel>
				<FormControl placeholder="enter you name"></FormControl>
				</FormGroup>
			</Form>
		);
	
}
export default Final;