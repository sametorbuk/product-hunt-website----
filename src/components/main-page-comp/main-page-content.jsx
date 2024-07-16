
import React from 'react';

import "./main-page-content.css"
import DailyProductComp from "../product-comp/daily-product-comp/daily-product-comp"
import RecentShoutoutProductComp from '../recent-shoutout-product/recent-shoutout-product-comp';

import { recentProduct } from '../../recent-product-veri.js';

export default function MainPageContent() {

    return(<>
        
        <div className="main-page-content">

        <div className="main-page-content-left">
            <div className="main-page-content-left-row1">
            <h2 style={{flex:"0.726"}}>Top Products Launching Today</h2>

            <div className='main-page-content-left-row1-btn'>
            <button className="main-page-content-left-row1">Featured</button>
            <button className="main-page-content-left-row1" >All</button>
            </div>
            </div>
        
        <DailyProductComp/>

        </div>
        <div className="main-page-content-right">

          <h3>Recent Shoutouts</h3>

        {recentProduct.map((product)=>{
          
          return <RecentShoutoutProductComp product={product}/>

        })}
        
        
        </div>
</div>
        
      
        
        
        
        </>)
}