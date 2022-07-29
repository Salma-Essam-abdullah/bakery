import cake1 from '../images/cake1.jpg'
import cake2 from '../images/cake2.jpg'
import cake3 from '../images/cake3.jpg'
// import logo1 from '../images/logo1.png'
import { AiOutlineDown } from "react-icons/ai";
import {AiOutlineShoppingCart} from  "react-icons/ai";
import React, { Component } from "react";

class Header extends Component {
 render() {
   return <>
    <body class="page-init">
    <header class="header" data-responsive="1199">
      <div class="header__top">
        <div class="container">
          <div class="row">
                <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12 ">
                  <p>460 West 34th Street, 15th floor, New York - Hotline: 804-377-3580 - 804-399-3580</p>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 "><a class="ps-search-btn" href="#"><i class="ps-icon--search"></i></a>
                  <div class="btn-group ps-dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD<i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">USD</a></li>
                      <li><a href="#">SGD</a></li>
                      <li><a href="#">ERO</a></li>
                      <li><a href="#">JPN</a></li>
                    </ul>
                  </div>
                  <div class="btn-group ps-dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language<i class="fa fa-angle-down"></i></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">English</a></li>
                      <li><a href="#">Japanese</a></li>
                      <li><a href="#">Chinese</a></li>
                    </ul>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <nav class="navigation">
        <div class="container">
          <div class="menu-toggle"><span></span></div>
          <div class="navigation__left">
                <ul class="menu menu--left">
                  <li class="current menu-item-has-children"><a href="index.html">Home</a>
                        <ul class="sub-menu">
                          <li><a href="#">Hot Demo</a></li>
                          <li class="end-block"><a href="#">Trending</a></li>
                          <li class="current "><a href="index.html">HOMEPAGE 1</a></li>
                          <li class="current "><a href="homepage-2.html">HOMEPAGE 2</a></li>
                          <li class="current "><a href="homepage-3.html">HOMEPAGE 3</a></li>
                          <li class="try-theme"><a href="#">Try Theme Now</a></li>
                        </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li class="menu-item-has-children"><a href="product-grid.html">Products</a>
                        <ul class="sub-menu">
                          <li><a href="product-listing.html">Product Listing</a></li>
                          <li><a href="product-grid.html">Product Grid</a></li>
                          <li><a href="product-detail.html">Product Detail</a></li>
                        </ul>
                  </li>
                  <li class="menu-item-has-children"><a href="#">Pages</a>
                        <ul class="sub-menu">
                          <li><a href="menu-1.html">Menu 1</a></li>
                          <li><a href="menu-2.html">Menu 2</a></li>
                          <li><a href="order-form.html">Order Form</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li><a href="404.html">404 Page</a></li>
                        </ul>
                  </li>
                </ul>
          </div><a class="ps-logo" href="index.html"><img src="images/logo-1.png" alt=""/></a>
          <div class="navigation__right">
                <ul class="menu menu--right">
                  <li><a href="#">Gallery</a></li>
                  <li class="menu-item-has-children"><a href="blog-listing.html">Blogs</a>
                        <ul class="sub-menu">
                          <li class="menu-item-has-children"><a href="blog-detail.html">Blog Detail</a>
                                <ul class="sub-menu">
                                  <li><a href="#">Sample Menu #1</a></li>
                                  <li><a href="#">Sample Menu #2</a></li>
                                </ul>
                          </li>
                        </ul>
                  </li>
                  <li class="menu-item-has-children"><a href="#">Contact</a>
                        <ul class="sub-menu">
                          <li><a href="contact.html">Contact 1</a></li>
                          <li><a href="contact-2.html">Contact 2</a></li>
                        </ul>
                  </li>
                </ul>
                <div class="ps-cart"><a class="ps-cart__toggle" href="#"><span><i>20</i></span><i class="ps-icon--shopping-cart"></i></a>
                  <div class="ps-cart__listing">
                    <div class="ps-cart__content">
                      <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                        <div class="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src="images/cake/img-cake-1.jpg" alt=""/></div>
                        <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.html">Amazin’ Glazin’</a>
                          <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                        </div>
                      </div>
                      <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                        <div class="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src="images/cake/img-cake-2.jpg" alt=""/></div>
                        <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.html">The Crusty Croissant</a>
                          <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                        </div>
                      </div>
                      <div class="ps-cart-item"><a class="ps-cart-item__close" href="#"></a>
                        <div class="ps-cart-item__thumbnail"><a href="product-detail.html"></a><img src="images/cake/img-cake-3.jpg" alt=""/></div>
                        <div class="ps-cart-item__content"><a class="ps-cart-item__title" href="product-detail.html">The Rolling Pin</a>
                          <p><span>Quantity:<i>12</i></span><span>Total:<i>£176</i></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="ps-cart__total">
                      <p>Number of items:<span>36</span></p>
                      <p>Item Total:<span>£528.00</span></p>
                    </div>
                    <div class="ps-cart__footer"><a class="ps-btn ps-btn--view-bag" href="cart.html">View bag</a></div>
                  </div>
                </div>
          </div>
        </div>
      </nav>
    </header>
   </body>
   </>;
 }
}

export default Header;