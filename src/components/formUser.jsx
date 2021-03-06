import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Form, Radio, Checkbox } from 'react-bootstrap';

const FormUser = ({data, id, display}) => {
	return(
		display ?
		<div style={{border: '1px solid #aaa', marginTop: '1em', boxSizing: 'border-box', padding: '0.5em'}}>
			<p>id: {id}</p>
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
			<Checkbox>
      			Прочитано
    		</Checkbox>
    		<FormGroup>
      			<Radio name="radioGroup">Хорошая</Radio>{' '}
      			<Radio name="radioGroup">Плохая</Radio>
      		</FormGroup>
		</div>
		: <div></div>
	);
}
export default FormUser;