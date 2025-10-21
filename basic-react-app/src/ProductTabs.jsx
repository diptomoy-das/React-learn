import Product from "./product.jsx";
function ProductTabs(){
    let option1=["Hi-Tech", " Durable"]
    let option2={a: "Portable", b: "Lightweight"}
    return(
    <div className="ProductTabs">
    <Product title="Phone" price={30000} features={option1}/>
    <Product title="Laptop" price={50000} features2={option2}/>  
    <Product title="Tablet" price={20000}/>
    <Product title="Pen" price={10}/>
    </div>
    );
}
export default ProductTabs;