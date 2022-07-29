
import React, { Component } from "react";
class Contact extends React.Component {
    render() {
return <> 
   <section class="ps-section ps-section--map">
   <div id="contact-map" data-address="New York, NY" data-title="BAKERY LOCATION!" data-zoom="17"></div>
   <div class="ps-delivery">
     <div class="ps-delivery__header">
       <h3>Contact Us</h3>
       <p>Our Company is the best, meet the creative team that never sleeps. Say something to us we will answer to you.</p>
     </div>
     <div class="ps-delivery__content">
       <form class="ps-delivery__form" action="product-listing.html" method="post">
         <div class="form-group">
           <label>Name<span>*</span></label>
           <input class="form-control" type="text" />
         </div>
         <div class="form-group">
           <label>Email<span>*</span></label>
           <input class="form-control" type="email"/>
         </div>
         <div class="form-group">
           <label>Phone Number<span>*</span></label>
           <input class="form-control" type="text"/>
         </div>
         <div class="form-group">
           <label>Your message<span>*</span></label>
           <textarea class="form-control"></textarea>
         </div>
         <div class="form-group text-center">
           <button class="ps-btn">Send Message<i class="fa fa-angle-right"></i></button>
         </div>
       </form>
     </div>
   </div>
 </section>
 </>;
 }
}

export default Contact;