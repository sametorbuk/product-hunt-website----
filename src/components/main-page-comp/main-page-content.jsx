
import React from 'react';

import "./main-page-content.css"
import DailyProductComp from "../product-comp/daily-product-comp/daily-product-comp"


export default function MainPageContent() {

    return(<>
        
        <div className="main-page-content">

        <div className="main-page-content-left">
            <div className="main-page-content-left-row1">
            <h2 style={{flex:"0.726"}}>Top Products Launching Today</h2>
            <button className="main-page-content-left-row1">Featured</button>
            <button className="main-page-content-left-row1" >All</button>
            </div>
        
        <DailyProductComp/>

        </div>
        <div className="main-page-content-right">
          <h2>SAMET</h2>

        </div>



        
        
        
        
        
        
        
        </div>
        
        
        
        
        
        
        </>)
}