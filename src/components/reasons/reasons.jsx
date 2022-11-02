import React from 'react'
import "./reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import adidas from "../../assets/adidas.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        {/**First we create a gallery containing some pictures og our gym */}
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
      </div>

      <div className="right-r">
        <span>Some Reasons</span>
        <div>
            <span className="stroke-text">why</span>
            <span> choose us?</span>
        </div>
        {/** Create details why choose us */}
        <div className="details-r">
        <div>
            <img src={tick} alt="" />
            <span> OVER 140_ EXPERT COACHES</span>
            </div>
        <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
        <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
            </div>
        <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
            </div>
        </div>
        {/**We create the partners as below */}
        <span 
        style={{
            color:"var(--gray)",
            fontWeight:"normal"
            }}
            > OUR PARTNERS
            </span>
            {/**Partner logos */}
            <div className="partners">
                <img src={nb} alt="" />
                <img src={
                    adidas} alt="" />
                <img src={nike} alt="" />
            </div>
    </div>
    </div>
    
  )
}

export default Reasons