import { combineReducers } from "redux";
import contacts from "./contacts"
import userReducer from "./userReducer"
import activeUserIdReducer from "./activeUserIdReducer"
import messages from "./messages"
import typing from "./typing"
import auth from "./auth"

export default combineReducers({
	contacts: contacts,
	userReducer: userReducer,
	activeUserIdReducer: activeUserIdReducer,
	messages:messages,
	typing:typing,
	auth: auth

})