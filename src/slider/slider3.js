import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider1() {
  var settings = {
    dots: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <>
      <div class="sliders"   style={{backgroundImage: `url("img-bg-1.jpg")`}}>
      <Slider {...settings}>
        <div>
        <div class="ps-testimonial text-center pt-80 pb-100">
              <div class="ps-testimonial__header">
                <div class="ps-testimonial__thumbnail"><img src="images/testimonial/1.jpg" alt="" /></div>
                <p>Logan May - CEO & Founder Invision</p>
              </div>
              <div class="ps-testimonial__content">
                <p>Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.</p>
              </div>
            </div>
        </div>
        <div>
        <div class="ps-testimonial text-center pt-80 pb-100">
              <div class="ps-testimonial__header">
                <div class="ps-testimonial__thumbnail"><img src="images/testimonial/2.jpg" alt=""/></div>
               
                <p>Logan May - CEO & Founder Invision</p>
              </div>
              <div class="ps-testimonial__content">
                <p>Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.</p>
              </div>
            </div>
        </div>
        <div>
        <div class="ps-testimonial text-center pt-80 pb-100">
              <div class="ps-testimonial__header">
                <div class="ps-testimonial__thumbnail"><img src="images/testimonial/3.jpg" alt=""/></div>
               
                <p>Logan May - CEO & Founder Invision</p>
              </div>
              <div class="ps-testimonial__content">
                <p>Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.</p>
              </div>
            </div>
        </div>
        
        <div>
        <div class="ps-testimonial text-center pt-80 pb-100">
              <div class="ps-testimonial__header">
                <div class="ps-testimonial__thumbnail"><img src="images/testimonial/4.jpg" alt=""/></div>
               
                <p>Logan May - CEO & Founder Invision</p>
              </div>
              <div class="ps-testimonial__content">
                <p>Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.</p>
              </div>
            </div>
        </div>
       </Slider>
       </div>
    </>
  );
}