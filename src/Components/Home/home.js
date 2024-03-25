import React from 'react'
import "./home.css"
import Cards from '../Cards/cards'


const Home = (props) => {

return (
  <div className='home'>
   
    <div className='productlist' >
      {
          props.products.map((product,index)=>(<Cards 
            product={product} 
            cartItems={props.cartItems} 
            addToCart={props.addToCart}  
            removeFromCart={props.removeFromCart}
            key={index}/>))
      }
    </div>
  </div>
)
}

export default Home






