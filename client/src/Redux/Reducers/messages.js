import {SEND_MESSAGE} from "../Action/constants/action-type"

const getMessages = {content: "This is the first message"}
export default function messages(state= getMessages, action) {
	switch (action.type) {
		case SEND_MESSAGE:			
			const {message, userId} = action.payload;			
			const allMessage = state[userId];
			const number = +Object.keys(allMessage).pop() + 1
			return {...state,
					[userId]: {
						...state[userId],
						[number]: {
							is_user_msg: true,
							number: number,
							text: message
						}
					}}
		default:
			return state;
	}
}