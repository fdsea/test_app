import React from 'react';

const beginState = {
	createData: {}
};
const mainReducer = (state = beginState, action) => {
	
		switch(action.type){
			case "SEND_FIRST":  return state = {...state, createData: {...state.createData, ...action.payload}};
			case "SEND_SECOND": return state = {...state, createData: {...state.createData, ...action.payload}};
			case "SEND_THIRD":  return state = {...state, createData: {...state.createData, ...action.payload}};
			default: return state = {...state};
	}
};

export default mainReducer;