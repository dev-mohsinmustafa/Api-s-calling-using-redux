
import { getAccUserFulfilled, getAccUserRejected, getAccUserPending,inc,dec, incByAmt } from '../../constants/type';

    // Reducers

   export function accountReducers(state = { amount: 1 }, action) {
        switch (action.type) {
            case getAccUserFulfilled:
                return { amount: action.payload, pending: false };

            case getAccUserRejected:
                // ...state me baqi chezen wese he wapis re jaye
                return { ...state, error: action.error, pending: false };
            case getAccUserPending:
                return { ...state, pending: true };


            case inc:
                return { amount: state.amount + 1 };
            case dec:
                return { amount: state.amount - 1 };

            case incByAmt:
                return { amount: state.amount + action.payload };
            default:
                return state;
        }
    }









 