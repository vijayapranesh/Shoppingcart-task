import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./header.css"
import { BsCart } from "react-icons/bs";


function Header(props) {
  return (
    <div>
        <div className="header1">
          <span><h3>Start Bootstrap</h3></span>
          <span className="navbar">
            

          <nav class="navbar navbar-expand-lg navbar-light bg-light">


              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Shop
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">All Products</a>
                      <a class="dropdown-item" href="#">Popular Items</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">New Arivals</a>
                    </div>
                  </li>
                  </ul>
              </div>  
              </nav>
          </span>
         
          <span className="cartIcon">
              <span className="icon">
               <BsCart />
              </span>
              <span>
                <h5>Cart</h5>
              </span>
              <span className="cart">
                <h5>{props.cartCount}</h5>
              </span>
            </span>
          
        </div>              
          

          

        <div className="header2">
                <h1>Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">
                  With this shop hompeage template
                </p>
        </div>
     </div>
  );
}

export default Header;
