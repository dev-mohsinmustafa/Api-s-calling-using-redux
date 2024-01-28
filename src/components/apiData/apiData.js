import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataMethodFromApi } from "../../redux/apiActions/apiActions";

const ApiData = () => {

    const dispatch = useDispatch();
    //ab pata krna hai data araaha hai ya nai 1 variable lelen or knse state hai uska name
    const dataFromApi = useSelector(state => state.apiReducers);
    // console.log("api data from redux", dataFromApi);
    console.log("api data from redux", JSON.stringify(dataFromApi));

    useEffect(() => {
        fetchDataFromApi();
    }, []);
    const fetchDataFromApi = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        // console.log("data from api response", data);
        // data object me araha ho to ese kr len
        console.log("data from api response", JSON.stringify(data));
        // ab jo action banaya tha to usko call to krna hai na 
        dispatch(getDataMethodFromApi(data))
    };



    return (
        <div>
            <h1>Api Data component</h1>
            {
                dataFromApi.map((item) => {
                    return (
                        <div key={dataFromApi.id}>
                            <ul>
                                <li>{item.title}</li>
                                <li>{item.price}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ApiData;
