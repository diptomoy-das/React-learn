import { useState } from "react";
function Counter_2(){
    let [count, setcount]=useState(0);
    function inccount(){
        setcount((currcount)=>{
            return(currcount+1);
        })
        setcount((currcount)=>{
            return(currcount+1);
        })
        console.log(count);
    }
    return(
        <div>
            <h3>count ={count}</h3>
            <button onClick={inccount}>increase count</button>
        </div>
    )
}
export default Counter_2;