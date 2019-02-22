import { SIGN_IN, SIGN_OUT } from '../actions/types';


const INTIAL_STATE = {
	isSingedIn: null
};

export default (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN: 
			return { ...state, isSingedIn: true };
		case SIGN_OUT: 
			return { ...state, isSingedIn: false}
		default: 
			return state;
	}
};