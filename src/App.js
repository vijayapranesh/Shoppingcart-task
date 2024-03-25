
import './App.css';
import Footer from './Components/Footer/footer';
import Home from './Components/Home/home'
import Header from './Components/Hearder/header';
import { useState } from 'react';



const productsList = [{
  id:"1",
  img:"img",
  name:"Fancy Product",
  price:"$40.00 - $80.00",
  
},{
  id:"2",
  img:"img",
  name:"Special Item",
  star:"https://miro.medium.com/v2/resize:fit:300/format:webp/0*3hLSNkPwKPuAWSj5.png",
  price:"$̶2̶0̶.̶0̶0̶  $18.00",
  description : "sale", 
},{
  id:"3",
  img:"img",
  name:"Sale Item",
  price:"$̶5̶0̶.̶0̶0̶ $25.00",
  description : "sale", 
},{
  id:"4",
  img:"img",
  name:"Popular Item",
  star:"https://miro.medium.com/v2/resize:fit:300/format:webp/0*3hLSNkPwKPuAWSj5.png",
  price:"$40.00",
},{
  id:"5",
  img:"img",
  name:"Sale Item",
  price:"$̶5̶0̶.̶0̶0̶ $25.00",
  description : "sale", 
},{
  id:"6",
  img:"img",
  name:"Fancy Product",
  price:"$40.00 - $80.00",
},{
  id:"7",
  img:"img",
  name:"Special Item",
  star:"https://miro.medium.com/v2/resize:fit:300/format:webp/0*3hLSNkPwKPuAWSj5.png",
  price:"$̶2̶0̶.̶0̶0̶ $18.00",
  description : "sale", 
},{
  id:"8",
  img:"img",
  name:"Popular Item",
  star:"https://miro.medium.com/v2/resize:fit:300/format:webp/0*3hLSNkPwKPuAWSj5.png",
  price:"$40.00",
}]




function App() {
  const [products,setProducts] = useState(productsList)
  const [cartItems,setCartItems] = useState([])

  const addToCart = (newItem) => {
    setCartItems((cartItems)=>([...cartItems,newItem]))
  }


  const removeFromCart = (itemToBeRemoved) => {
    setCartItems((cartItems) => (cartItems.filter((item) => item.id  !== itemToBeRemoved.id))
    )
  }

  return (
    <div className="App">

   
      <Header cartCount={cartItems.length}/>
     
      <h3><Home 
          products={products} 
          cartItems={cartItems} 
          addToCart={addToCart} 
          removeFromCart={removeFromCart}
          />
      </h3>

      <Footer/>
    </div>
  );
}
  
export default App;
