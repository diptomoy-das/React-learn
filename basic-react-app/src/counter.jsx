import { useState } from "react";
function Counter(){
    let [count, setcount]=useState(0);
    function inccount(){
        setcount(count+1);
        console.log(count);
    }
    return(
        <div>
            <h3>count ={count}</h3>
            <button onClick={inccount}>increase count</button>
        </div>
    )
}
export default Counter;