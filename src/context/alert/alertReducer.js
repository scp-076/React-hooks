import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: (state) => state
};

export const alertReducer  =  (state, action) => {
    // switch(action.type) {
    //     case SHOW_ALERT: return action.payload;
    //     case HIDE_ALERT: return null;
    //     default: return state;
    // }
    // вариант через switch можно заменить на вон ту хрень сверху (handlers)

    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};