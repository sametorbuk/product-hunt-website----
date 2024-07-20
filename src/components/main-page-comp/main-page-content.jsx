import React from 'react';

import './main-page-content.css';
import DailyProductComp from '../product-comp/daily-product-comp/daily-product-comp';
import RecentShoutoutProductComp from '../recent-shoutout-product/recent-shoutout-product-comp';

import { recentProduct } from '../../recent-product-veri.js';
import { sahteVeri } from '../../sahteVeri.js';
import { YesterdaysData } from '../../yesterdays-top-data.js';
import WelcomeComponent from './welcome-component/welcome-component.jsx';


export default function MainPageContent() {
  return (
    <>
      <div className="main-page-content">
        <div className="main-page-content-left">

          <WelcomeComponent />



          <div className="main-page-content-todays">
            <div className="main-page-content-left-row1">
              <h2 style={{ flex: '0.726' }}>Top Products Launching Today</h2>

              <div className="main-page-content-left-row1-btn">
                <button className="main-page-content-left-row1">
                  Featured
                </button>
                <button className="main-page-content-left-row1">All</button>
              </div>
            </div>
            <DailyProductComp data={sahteVeri} />
          </div>

          <div className="main-page-content-yesterdays">
            <div className="main-page-content-left-row1">
              <h2 style={{ flex: '0.726' }}>Yesterdays Top Products</h2>

              <div className="main-page-content-left-row1-btn">
                <button className="main-page-content-left-row1">
                  Featured
                </button>
                <button className="main-page-content-left-row1">All</button>
              </div>
            </div>

            <DailyProductComp data={YesterdaysData} />
          </div>
        </div>

        <div className="main-page-content-right">
          <h3>Recent Shoutouts</h3>

          {recentProduct.map((product) => {
            return <RecentShoutoutProductComp key={product.id} product={product} />;
          })}



        </div>
      </div>
    </>
  );
}
