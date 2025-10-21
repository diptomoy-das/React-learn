import Amazon_product from './amazon_product.jsx'
let style1={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",

};
let style2={
    height:"300px",
    width:"1500px",
    backgroundColor:"white",
    color:"black",
};
function Amazon_productTab(){
    return(
        <div style={style2}>
            <h2>Blockbuster Deals on Computer Accessories| Shop Now</h2>
            <div style={style1}>
            <Amazon_product title={"Logitech MX Master"} idx={0}/>
            <Amazon_product title={"Apple Pencil(2nd Gen)"} idx={1}/>
            <Amazon_product title={"Zebronics"} idx={2}/>
            <Amazon_product title={"Petronics Toad"} idx={3}/>
            </div>  
        </div> 
    )
}
export default Amazon_productTab;