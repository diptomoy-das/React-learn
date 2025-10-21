import './Product.css';

function Product({ title, price = 1, features = [], features2 = {} }) {
  let isdiscount=price >30000 
  let styles={backgroundColor: isdiscount ? "orange" : ""}
  return (
    <div className="Product" style={styles}>
      <h1>{title}</h1>
      <h2>Price: {price}</h2>
      <h1>{features.map((feature)=><li>{feature}</li>)}</h1>
      <h1>{features2.a}</h1>
      <h1>{features2.b}</h1>
      {isdiscount && <h3>Discount of 5%</h3>}
    </div>
  );
}

export default Product;
