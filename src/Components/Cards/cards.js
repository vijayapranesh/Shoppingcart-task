import React from 'react'
import "./cards.css"

const Cards = (props) => {
  const {product , cartItems, addToCart, removeFromCart} = props
  
  const addingItemToCart = (item) =>{
    addToCart({...item,quantity: 1})
  }
  
  const removingItemFromCart = (item) => {
    removeFromCart(item)
  }
    return (
      
      <div className='item-container'> 
      
     <img src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'></img>


     <div className='content'>

     <h5>{product.name}</h5>
      <h6 className='lineContainer'>{product.price}</h6>
      
      {product.description && (<div className='description'>
          {product.description} 
      </div>)}

      
          {
            cartItems.some((item) => item.id === product.id) ? (
            <button className='btn-remove' onClick={()=>(removingItemFromCart(product))}>Remove From Cart</button>
            ) : (
            <button className='btn-add' onClick={()=>(addingItemToCart(product))}>Add to Cart</button>)
          }   
        </div>
      </div>
    )
  }

export default Cards