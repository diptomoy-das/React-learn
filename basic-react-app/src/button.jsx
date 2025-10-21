function click(){
    console.log("you clicked the button")
}
function click2(){
    console.log("you clicked the paragraph")
}
function hover(){
    console.log("you hovered over the paragraph")
}
function doubleclick(){
    console.log("you double clicked on the button")
}
function Button(){
    return(
        <div>
            <button onClick={click}>click me</button>
            <p onClick={click2} onMouseEnter={hover}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti ut eaque temporibus quae animi delectus qui velit facilis commodi nesciunt, est ducimus quo in minima! Consequuntur asperiores a eius.</p>
            <button onDoubleClick={doubleclick}>double click me</button>
        </div>
    )
}
export default Button;