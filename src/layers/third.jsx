import React from 'react';
import { Link } from 'react-router-dom';
import store from './../store';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Form, Radio, Table, Grid, Row, Col } from 'react-bootstrap';
import Display from './../components/displayImg';

class Third extends React.Component{
	constructor(props){
		super(props);
		this.sendData = this.sendData.bind(this);
		this.loadImg = this.loadImg.bind(this);
		this.state = {
			firstImg: '',
			secondImg: ''
		};
	}
	loadImg(e){
		let file = e.target.files[0];
		let fr = new FileReader();
		let changeClass = e.target.className;
            fr.onload = (e) => {
            this.setState({
            	firstImg: changeClass === 'photo_1' ? fr.result : this.state.firstImg,
            	secondImg: changeClass === 'photo_2' ? fr.result : this.state.secondImg, 	
            });	
            }
        fr.readAsDataURL(file);
	}
	sendData(){
		store.dispatch({
			type: "SEND_THIRD",
			payload: {
				nationality: this.nationality.value,
				maritalStatus: this.maritalStatus.value,
				firstImg: this.state.firstImg,
				secondImg: this.state.secondImg,
				status: {
					read: false,
					quality: true
				}
			}
		})
	}
	render(){
		console.log(this.state);
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
								<FormControl type="file" className={'photo_1'} inputRef ={(input)=>{ this.firstImg = input }} onChange={this.loadImg}></FormControl>
							</FormGroup>
							<Display url = {this.state.firstImg} width = {'200px'} />
							<FormGroup>
								<ControlLabel>Фотография №2 (самая красивая)</ControlLabel>
								<FormControl type="file" className={'photo_2'} inputRef ={(input)=>{ this.secondImg = input }} onChange={this.loadImg}></FormControl>
							</FormGroup>
							<Display url = {this.state.secondImg} width = {'200px'}/>
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