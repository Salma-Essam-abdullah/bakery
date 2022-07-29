import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ChildA from './ChildA'
import ChildB from "./ChildB"
import ChildY from "./ChildY"
import ChildZ from "./ChildZ"

class BestSellers extends React.Component {
    render() {
        return (
            <>
            <br/>
            <br/>
           
            <div class="ps-section__header text-center mb-100">
            <h4 class="ps-section__top">Making People Happy</h4>
            <h3 class="ps-section__title ps-section__title--full">OFFER THIS WEEK</h3>
            </div>
            {/* <ResponsiveMasonry
             columnsCountBreakPoints={{350: 1, 750: 2, 900: 3 }}
            >
                <Masonry >
                    <ChildA />
                    <ChildB/>
                    <ChildY />
                    <ChildZ />  
                </Masonry>

            </ResponsiveMasonry> */}
<div class="container">
    <div class="row">
    <div class="col-lg-6">
    <img src="images/offer/banner-1.jpg" alt=""/>
    </div>
    <div class="col-lg-6">
        
    <img src="images/offer/banner-2.jpg" alt=""  style={{width:"310px" , paddingRight:"30px"}}/>
    
    
    <img src="images/offer/banner-3.jpg" alt="" style={{width:"310px" , paddingRight:"30px"}}/>
    <img src="images/offer/banner-4.jpg" alt="" style={{ height:"300px" ,paddingRight:"55px" ,marginTop:"28px"}}/>
    </div>
    </div>
    
</div>
            </>
        )
    }
}

export default BestSellers;
