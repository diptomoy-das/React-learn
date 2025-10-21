import {useState} from "react";
function Likebutton(){
    let[isLiked, setisLiked]=useState(false);
    let [count, setcount]=useState(0);
    function toggle(){
        setisLiked(!isLiked);
        setcount(count+1);
    }
    let buttonstyle= {color:"blue"};
    return(
        <div>
            <p onClick={toggle}>
                {!isLiked ? (
                    <i class="fa-regular fa-thumbs-up" style={{fontSize:"50px"}}></i>
                ):(
                     <i class="fa-solid fa-thumbs-up" style={{color:"blue",fontSize:"50px"}} ></i>
                )} 
            </p>
            <p style={{fontWeight:"bold"}}>{count}</p>
        </div>
    )
}
export default Likebutton;