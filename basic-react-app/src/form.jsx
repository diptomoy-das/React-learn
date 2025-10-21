function message(event){
    event.preventDefault();
    console.log("you submitted the form");
}
function Form(){
    return(
        <div>
            <form onSubmit={message}>
                <input placeholder="Enter your message"></input>
                <button>submit</button>
            </form>
        </div>
    )
}
export default Form;