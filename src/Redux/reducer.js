import { MAIL_DATA } from "./action";


const initState = {
    mailData: []
}

export const mailReducer = (store = initState, { type, payload }) => {

    switch (type) {
        case MAIL_DATA:
            return { ...store, mailData: payload }
        default:
            return store;
    }
}