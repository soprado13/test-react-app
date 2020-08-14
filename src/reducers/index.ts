import {INCREMENT, DECREMENT} from '../actions/actionTypes'

const initialState = {
    count: 0 
}

function rootReducer(state = initialState, action : any) {
    switch(action.type){
        case INCREMENT: 
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

export default rootReducer