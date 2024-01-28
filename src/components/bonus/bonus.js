// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increamentBonus } from '../../redux/actions/actions';

function Bonus() {



  const points = useSelector(state => state.bonus.points);
  const amount = useSelector(state => state.account.amount);


  const dispatch = useDispatch();

  // const [bonus, setBonus] = useState({ points: 0 });

  // const increment = () => {
  //   setBonus({ points: bonus.points + 1 });
  // };


  return (
    <div className="flex" >
      <div className="container">
        <h4>
          <b style={{ color: "red" }}>Bonus Component</b>
        </h4>

        <h3 style={{ backgroundColor: 'yellow' }}>Amount : ${amount}</h3>
        <h3 style={{ backgroundColor: 'yellow' }}>Total Point : {points}</h3>



        <button onClick={()=>dispatch(increamentBonus())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;