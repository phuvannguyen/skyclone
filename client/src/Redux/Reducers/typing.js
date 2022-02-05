import {SET_VALUE_TYPE, SEND_MESSAGE} from "../Action/constants/action-type"

export default function activeUserId(state="", action) {
	switch (action.type) {
		case SET_VALUE_TYPE:
			return action.payload
		case SEND_MESSAGE:
			return ""
		default: 
			return state;
	}

}