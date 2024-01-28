import axios from "axios";
import { dec, getAccUserFulfilled, getAccUserPending, getAccUserRejected, inc, incBonus, incByAmt } from "../../constants/type";








// Actions Creators

export function getUserAccount(id) {
    return async (dispatch, getState) => {

        try {
            // for loading in api
            dispatch(getAccountUserPending());

            const { data } = await axios.get(`http://localhost:8080/accounts/${id}`);
            dispatch(getAccountUserFulfilled(data.amount));
        } catch (error) {
            dispatch(getAccountUserRejected(error.message));
            

        }


    }

}



export const getAccountUserFulfilled = (value) => {
    return { type: getAccUserFulfilled, payload: value }
}

export const getAccountUserRejected = (error) => {
    return { type: getAccUserRejected, error: error }
}
export const getAccountUserPending = () => {
    return { type: getAccUserPending }
}





export const increment = () => {
    return { type: inc };
};

export const decrement = () => {
    return { type: dec };
};

export const incrementByAmount = (value) => {
    return { type: incByAmt, payload: value };
};


export const increamentBonus = (value) => {
    return { type: incBonus, }
}





