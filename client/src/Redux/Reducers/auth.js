
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from "../Action/constants/action-type"

const user = JSON.parse(localStorage.getItem("user"));
const intialState = user ? {isLoggedIn: true, user} : {isLoggedIn: false, user: null}



export default function activeUserId(state=intialState, action) {	
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {...state, isLoggedIn: true, user: action.payload.user}
		case LOGIN_FAIL:
			return {...state, isLoggedIn: false, user: null}
		case LOGOUT:
			return {...state, isLoggedIn: false, user: null}
		case REGISTER_SUCCESS:
			return {...state, isLoggedIn: false}
		case REGISTER_FAIL:
			return {...state, isLoggedIn: false}		
		default:
			return state;
	}

}