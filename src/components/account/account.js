import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// action creators
import { decrement, getUserAccount, increment, incrementByAmount } from '../../redux/actions/actions';

function Account (){
    const points = useSelector(state => state.bonus.points);
    const amount = useSelector(state => state.account.amount);
  
  
    const dispatch = useDispatch(); 



    // const [account, setAccount] = useState({ amount: 0 });
    const [value, setValue] = useState(0);

    // const increment = () => {
    //     setAccount({ amount: account.amount + 1 });
    // };

    // const decrement = () => {
    //     setAccount({ amount: account.amount - 1 });
    // };


    // value add kr rahy user se
    // const incrementByAmount = (value) => {
    //     setAccount({ amount: account.amount + value });
    // };


    return (
        <div className="flex">
            <div className="container">
                <h4>
                    <b style={{color:"red"}}>Account Component</b>
                </h4>
                 <h3 style={{color:"yellow"}}>Amount:${amount}</h3>
                 <h3 style={{color:"yellow"}}>Points:${points}</h3>

                <button onClick={()=>dispatch(increment())}>Increment +</button>
                <button onClick={()=>dispatch(decrement())}>Decrement -</button>
                <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
                <button onClick={() => dispatch(incrementByAmount(value))}>
                    Increment By {value.amount} + 
                </button>

                <button onClick={() => dispatch(getUserAccount(1))}>
                    Initialize account of some user
                </button>
            </div>
        </div>
    )
}

export default Account;