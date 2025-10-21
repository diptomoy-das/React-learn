import './App.css'
import {Title} from './Title.jsx'
import Description from './Description.jsx'
import Product from './product.jsx'
import ProductTabs from './ProductTabs.jsx'
import MessageTabs from './MessageTabs.jsx'
import Button from './button.jsx'
import Form from './form.jsx'
import Counter from './counter.jsx'
import Likebutton from './likebutton.jsx'
import Counter_2 from './counter*2.jsx'
import Counter_random from './counter_random.jsx'
import Amazon_productTab from './amazon_productTabs.jsx'
function App() {
  return (
    <>
    <Amazon_productTab/>
    <Counter_random/>
    <Counter_2/>
    <Likebutton/>
    <Counter/>
    <Form/>
    <Button/>
    <MessageTabs/>
    <ProductTabs/>  
    </>  
  );
}

export default App;
