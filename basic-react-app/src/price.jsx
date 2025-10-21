function Price({oldprice, newprice}){
    let styles={
        backgroundColor:"#e0c367",
        width:"300px",
        height:"30px",
        borderBottomLeftRadius:"24px",
        borderBottomRightRadius:"24px",
    };
    let oldstyle={
        color:"black",
        textDecoration:"line-through",
    };
    let newstyle={
        color:"black",
        fontWeight:"bold",
    };
    return(
        <div style={styles}>
            <span style={oldstyle}>{oldprice}</span>
            &nbsp;
            &nbsp;
            &nbsp;
            <span style={newstyle}>{newprice}</span>
        </div>
    )
}
export default Price;