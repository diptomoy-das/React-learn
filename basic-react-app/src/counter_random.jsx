import { useState } from "react";
function innit(){
    return Math.random();
}
function Counter_random(){
    let [count, setcount]=useState(innit);
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
export default Counter_random;