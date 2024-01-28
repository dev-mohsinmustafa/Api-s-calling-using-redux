import React from 'react'
import Account from './components/account/account';
import Bonus from './components/bonus/bonus';
import { useSelector } from 'react-redux';
import ApiData from './components/apiData/apiData';

function App() {




  // state ki value change krne ke leye 2 hooks hoty hai 
  // useSelector useDispatch
  // or ye state ko access krne ke leye hai 


  // useSelector(state=>state.account.amount)
  // is ke 1 var me store 
  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);



  const account = useSelector(state => state.account);

  // useSelector hook react-redux se araha hai or ye state ko access krne ke leyppx



  // const [account, setAccount] = useState({ amount: 0 });


  // const increment = () => {
  //   setAccount({ amount: account.amount + 1 });
  // };

  // const decrement = () => {
  //   setAccount({ amount: account.amount - 1 });
  // };

  // const incrementByAmount = (value) => {
  //   setAccount({ amount: account.amount + value });
  // };



  return (
    <>




      <div className='App' style={{ backgroundColor: 'gray' }}>
        <h4 style={{ color: "red" }}>App : </h4>


        <ApiData />


        {/* jab tak koi chex loading ho rahe hai tb tk current amount invalid hai is me me dekhaon ga 
     he nai
     to me loading ka sign dikhaon ga */}
        {/* jab tk account me pending hai mtlb apne request bhej de hai to pending true hojaye ge tb tk waha pe ap kuch
       esa dekha do*/}
        {
          
          account.pending ?
           <p style={{color:"red"}}>loading....</p>
            : account.error ? 
            <span style={{color:'white'}}>{account.error}</span>
             :
            <h3 style={{ color: "yellow" }}>Current Amount : {amount} </h3>
        }

            {/* <h3 style={{ color: "yellow" }}>Current Amount : {amount} </h3> */}
            <h3 style={{ color: "yellow" }}>Total Bonus : {points} </h3>
            {/* <Account
          increment={increment}
          decrement={decrement}
          incrementByAmount={incrementByAmount}
          account={account} /> */}


            <Account />
            <Bonus />
          </div>

    </>
      )
}

      export default App;