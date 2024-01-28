import { incBonus, incByAmt } from "../../constants/type";


// Reducers
export function bonusReducers(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 };

        case incByAmt:
            // agr koi 100 se zayada amount jama krwata to us ko he 1 bonus point mile bs
            if (action.payload >= 100) {
                return { points: state.points + 1 };
            }
            // break;

        default:
            return state;
    }
}


