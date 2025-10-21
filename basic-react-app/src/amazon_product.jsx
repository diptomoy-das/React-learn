import './amazon_product.css';
import Price from './price';
function Amazon_product({title, idx}){
    let oldprice=["12,495","11,900","1,599","599"]
    let newprice=["8,999","9,199","899","278"]
    let description=[
        ["8000 Dpi","5 Programmable Buttons"],
        ["Intuitive Touch Surface","Designed for Ipad Pro"],
        ["Designed for Ipad Pro","Intuitive Touch Surface"],
        ["Wireless Mouse 2.4 GHz","Optical Orientation"]
    ]
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
        </div>
    )
}
export default Amazon_product;