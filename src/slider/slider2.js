import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
      <>
      <br/>
      <br/>
      <br/>
    <div class="container" style={{marginTop:"50px"}}>
    <div class="ps-section__header text-center mb-50">
      <h4 class="ps-section__top">Sweet Cupcakes</h4>
      <h3 class="ps-section__title ps-section__title--full">BEST SELLER</h3>
    </div>
    </div>
    <Slider {...settings}>
        <div>
        <div class="ps-product">
                <div class="ps-product__thumbnail">
                  <div class="ps-badge"><span>-50%</span></div><a class="ps-product__overlay" href="product-detail.html"></a><img src="images/cake/img-cake-7.jpg" alt=""/>
                  <ul class="ps-product__action">
                    <li><a class="popup-modal" href="#quickview-modal" data-effect="mfp-zoom-out" data-tooltip="View"><i class="ps-icon--search"></i></a></li>
                    <li><a href="#" data-tooltip="Add to wishlist"><i class="ps-icon--heart"></i></a></li>
                    <li><a href="#" data-tooltip="Compare"><i class="ps-icon--reload"></i></a></li>
                    <li><a href="#" data-tooltip="Add to cart"><i class="ps-icon--shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div class="ps-product__content"><a class="ps-product__title" href="product-detail.html">Red sugar flower</a>
                  <div class="ps-product__category"><a class="ps-product__category" href="product-listing.html">cupcake</a><a class="ps-product__category" href="product-listing.html">sweet</a><a class="ps-product__category" href="product-listing.html">bio</a>
                  </div>
                  <p class="ps-product__price">£5.00</p>
                </div>
              </div>
          </div>
      <div>
      <div class="ps-product">
                <div class="ps-product__thumbnail"><a class="ps-product__overlay" href="product-detail.html"></a><img src="images/cake/img-cake-2.jpg" alt="" />
                  <ul class="ps-product__action">
                    <li><a class="popup-modal" href="#quickview-modal" data-effect="mfp-zoom-out" data-tooltip="View"><i class="ps-icon--search"></i></a></li>
                    <li><a href="#" data-tooltip="Add to wishlist"><i class="ps-icon--heart"></i></a></li>
                    <li><a href="#" data-tooltip="Compare"><i class="ps-icon--reload"></i></a></li>
                    <li><a href="#" data-tooltip="Add to cart"><i class="ps-icon--shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div class="ps-product__content"><a class="ps-product__title" href="product-detail.html">Cupcake Queen</a>
                  <div class="ps-product__category"><a class="ps-product__category" href="product-listing.html">cupcake</a><a class="ps-product__category" href="product-listing.html">sweet</a><a class="ps-product__category" href="product-listing.html">bio</a>
                  </div>
                  <select class="ps-rating">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="5">5</option>
                  </select>
                  <p class="ps-product__price">£5.00</p>
                </div>
              </div>
      </div>
      <div>
      <div class="ps-product">
                <div class="ps-product__thumbnail">
                  <div class="ps-badge"><span>-50%</span></div><a class="ps-product__overlay" href="product-detail.html"></a><img src="images/cake/img-cake-4.jpg" alt=""/>
                  <ul class="ps-product__action">
                    <li><a class="popup-modal" href="#quickview-modal" data-effect="mfp-zoom-out" data-tooltip="View"><i class="ps-icon--search"></i></a></li>
                    <li><a href="#" data-tooltip="Add to wishlist"><i class="ps-icon--heart"></i></a></li>
                    <li><a href="#" data-tooltip="Compare"><i class="ps-icon--reload"></i></a></li>
                    <li><a href="#" data-tooltip="Add to cart"><i class="ps-icon--shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div class="ps-product__content"><a class="ps-product__title" href="product-detail.html">Cupcake Glory</a>
                  <div class="ps-product__category"><a class="ps-product__category" href="product-listing.html">cupcake</a><a class="ps-product__category" href="product-listing.html">sweet</a><a class="ps-product__category" href="product-listing.html">bio</a>
                  </div>
                  <select class="ps-rating">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="5">5</option>
                  </select>
                  <p class="ps-product__price">£5.00</p>
                </div>
              </div>
      </div>
      <div>
      <div class="ps-product">
                <div class="ps-product__thumbnail">
                  <div class="ps-badge ps-badge--new"><span>New</span></div><a class="ps-product__overlay" href="product-detail.html"></a><img src="images/cake/img-cake-8.jpg" alt=""/>
                  <ul class="ps-product__action">
                    <li><a class="popup-modal" href="#quickview-modal" data-effect="mfp-zoom-out" data-tooltip="View"><i class="ps-icon--search"></i></a></li>
                    <li><a href="#" data-tooltip="Add to wishlist"><i class="ps-icon--heart"></i></a></li>
                    <li><a href="#" data-tooltip="Compare"><i class="ps-icon--reload"></i></a></li>
                    <li><a href="#" data-tooltip="Add to cart"><i class="ps-icon--shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div class="ps-product__content"><a class="ps-product__title" href="product-detail.html">Sweet Cakes</a>
                  <div class="ps-product__category"><a class="ps-product__category" href="product-listing.html">cupcake</a><a class="ps-product__category" href="product-listing.html">sweet</a><a class="ps-product__category" href="product-listing.html">bio</a>
                  </div>
                  <select class="ps-rating">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="5">5</option>
                  </select>
                  <p class="ps-product__price">£5.00</p>
                </div>
              </div>
      </div>
      <div>
        <div class="ps-product">
                <div class="ps-product__thumbnail">
                  <div class="ps-badge"><span>-50%</span></div><a class="ps-product__overlay" href="product-detail.html"></a><img src="images/cake/img-cake-7.jpg" alt=""/>
                  <ul class="ps-product__action">
                    <li><a class="popup-modal" href="#quickview-modal" data-effect="mfp-zoom-out" data-tooltip="View"><i class="ps-icon--search"></i></a></li>
                    <li><a href="#" data-tooltip="Add to wishlist"><i class="ps-icon--heart"></i></a></li>
                    <li><a href="#" data-tooltip="Compare"><i class="ps-icon--reload"></i></a></li>
                    <li><a href="#" data-tooltip="Add to cart"><i class="ps-icon--shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div class="ps-product__content"><a class="ps-product__title" href="product-detail.html">Red sugar flower</a>
                  <div class="ps-product__category"><a class="ps-product__category" href="product-listing.html">cupcake</a><a class="ps-product__category" href="product-listing.html">sweet</a><a class="ps-product__category" href="product-listing.html">bio</a>
                  </div>
                  <p class="ps-product__price">£5.00</p>
                </div>
              </div>
          </div>
          <div>
      <div class="ps-product">
                <div class="ps-product__thumbnail"><a class="ps-product__overlay" href="product-detail.html"></a><img src="images/cake/img-cake-2.jpg" alt="" />
                  <ul class="ps-product__action">
                    <li><a class="popup-modal" href="#quickview-modal" data-effect="mfp-zoom-out" data-tooltip="View"><i class="ps-icon--search"></i></a></li>
                    <li><a href="#" data-tooltip="Add to wishlist"><i class="ps-icon--heart"></i></a></li>
                    <li><a href="#" data-tooltip="Compare"><i class="ps-icon--reload"></i></a></li>
                    <li><a href="#" data-tooltip="Add to cart"><i class="ps-icon--shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div class="ps-product__content"><a class="ps-product__title" href="product-detail.html">Cupcake Queen</a>
                  <div class="ps-product__category"><a class="ps-product__category" href="product-listing.html">cupcake</a><a class="ps-product__category" href="product-listing.html">sweet</a><a class="ps-product__category" href="product-listing.html">bio</a>
                  </div>
                  <select class="ps-rating">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="5">5</option>
                  </select>
                  <p class="ps-product__price">£5.00</p>
                </div>
              </div>
      </div>
      <div>
      <div class="ps-product">
                <div class="ps-product__thumbnail">
                  <div class="ps-badge"><span>-50%</span></div><a class="ps-product__overlay" href="product-detail.html"></a><img src="images/cake/img-cake-4.jpg" alt=""/>
                  <ul class="ps-product__action">
                    <li><a class="popup-modal" href="#quickview-modal" data-effect="mfp-zoom-out" data-tooltip="View"><i class="ps-icon--search"></i></a></li>
                    <li><a href="#" data-tooltip="Add to wishlist"><i class="ps-icon--heart"></i></a></li>
                    <li><a href="#" data-tooltip="Compare"><i class="ps-icon--reload"></i></a></li>
                    <li><a href="#" data-tooltip="Add to cart"><i class="ps-icon--shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div class="ps-product__content"><a class="ps-product__title" href="product-detail.html">Cupcake Glory</a>
                  <div class="ps-product__category"><a class="ps-product__category" href="product-listing.html">cupcake</a><a class="ps-product__category" href="product-listing.html">sweet</a><a class="ps-product__category" href="product-listing.html">bio</a>
                  </div>
                  <select class="ps-rating">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="5">5</option>
                  </select>
                  <p class="ps-product__price">£5.00</p>
                </div>
              </div>
      </div>
      <div>
      <div class="ps-product" style={{ marginBottom:"50px"}}>
                <div class="ps-product__thumbnail">
                  <div class="ps-badge ps-badge--new"><span>New</span></div><a class="ps-product__overlay" href="product-detail.html"></a><img src="images/cake/img-cake-8.jpg" alt=""/>
                  <ul class="ps-product__action">
                    <li><a class="popup-modal" href="#quickview-modal" data-effect="mfp-zoom-out" data-tooltip="View"><i class="ps-icon--search"></i></a></li>
                    <li><a href="#" data-tooltip="Add to wishlist"><i class="ps-icon--heart"></i></a></li>
                    <li><a href="#" data-tooltip="Compare"><i class="ps-icon--reload"></i></a></li>
                    <li><a href="#" data-tooltip="Add to cart"><i class="ps-icon--shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div class="ps-product__content"><a class="ps-product__title" href="product-detail.html">Sweet Cakes</a>
                  <div class="ps-product__category"><a class="ps-product__category" href="product-listing.html">cupcake</a><a class="ps-product__category" href="product-listing.html">sweet</a><a class="ps-product__category" href="product-listing.html">bio</a>
                  </div>
                  <select class="ps-rating">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="5">5</option>
                  </select>
                  <p class="ps-product__price">£5.00</p>
                </div>
              </div>
      </div>
    </Slider>
    </>
  );
}