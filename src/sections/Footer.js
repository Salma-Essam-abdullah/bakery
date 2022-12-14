

import React, { Component } from "react";
class Footer extends React.Component {
    render() {
return <> 

 <footer class="ps-footer">
 <div class="container">
   <div class="row">
         <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
           <div class="ps-widget ps-widget--footer ps-widget--payment">
             <div class="ps-widget__header">
               <h3 class="ps-widget__title">PAYMENTS ACCEPTED</h3>
             </div>
             <div class="ps-widget__content">
               <ul>
                 <li><a href="#"><img src="images/payment/1.png" alt=""/></a></li>
                 <li><a href="#"><img src="images/payment/2.png" alt=""/></a></li>
                 <li><a href="#"><img src="images/payment/3.png" alt=""/></a></li>
                 <li><a href="#"><img src="images/payment/4.png" alt=""/></a></li>
                 <li><a href="#"><img src="images/payment/5.png" alt=""/></a></li>
               </ul>
             </div>
           </div>
         </div>
         <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
           <div class="ps-widget ps-widget--footer ps-widget--worktime">
             <div class="ps-widget__header">
               <h3 class="ps-widget__title">WORK TIME</h3>
             </div>
             <div class="ps-widget__content">
               <p><strong>Monday - Friday</strong> 8:00 am - 8:30 pm</p>
               <p><strong>Satuday - Sunday</strong>10:00 am - 16:30 pm</p>
             </div>
           </div>
         </div>
         <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
           <div class="ps-widget ps-widget--footer ps-widget--order">
             <div class="ps-widget__header">
               <h3 class="ps-widget__title">ORDERS AND RETURNS</h3>
             </div>
             <div class="ps-widget__content">
                   <ul class="ps-list--line">
                     <li><a href="#">Order</a></li>
                     <li><a href="#">Shipping</a></li>
                     <li><a href="#">Policy Return Policy</a></li>
                     <li><a href="#">Payments</a></li>
                   </ul>
             </div>
           </div>
         </div>
         <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
           <div class="ps-widget ps-widget--footer ps-widget--connect">
             <div class="ps-widget__header">
               <h3 class="ps-widget__title">CONNECT US</h3>
             </div>
             <div class="ps-widget__content">
                   <ul class="ps-widget__social">
                     <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                     <li><a href="#"><i class="fa fa-google"></i></a></li>
                     <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                     <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                   </ul><a href="#"><img src="images/app.jpg" alt=""/></a>
               <p>@2017 Design by<a href="#"> Alena Studio</a>.</p>
             </div>
           </div>
         </div>
   </div>
 </div>
</footer>
</>;
 }
}

export default Footer;