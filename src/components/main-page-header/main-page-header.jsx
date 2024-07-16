
import "./main-page-header.css"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MainPageHeader() {
    const [hovered, setHovered] = useState(false);
    const [isDivHovered, setIsDivHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        
        if(!isDivHovered) {
            setHovered(false);
        }
        
        
        
    };




return(<>

<header className="main-page-header">

<div className="main-page-header-left">
<img className="main-page-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KFKNkfUtMNcGRswfmr_eh3RK9R9ix9wmSPbosLRAo9hLb0I8IoZb2jjXLQxj49PBzyQ&usqp=CAU" alt="" />
<input type="text" placeholder="Search (ctrl+k)" />
</div>

<nav className="header-nav">
<button>Launches</button>














<button onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave} >Products</button>

{(hovered || isDivHovered) &&  <div 

onMouseEnter={() => setIsDivHovered(true)}
onMouseLeave={() => setIsDivHovered(false)}

className="header-products-content">

<div className="header-products-content-row1">
<FontAwesomeIcon className="bull-horn-icon" icon={faBullhorn} />
    <div className="header-product-content-row1-right">
      <p className="header-product-content-p">Shoutouts Leaderboard</p>
      <p   className="header-product-content-p" > The most-loved products on Product Hunt</p>


    </div>

</div>

<div className="header-products-main-content">

<div className="left">
<p>Work & Productivity</p>
<p>Engineering & Development</p>
<p>Design & Creative</p>
<p>Finance</p>
<p>Social & Community</p>
<p>Marketing & Sales</p>
<p>Travel</p>
<p>Health & Fitness</p>
<p>Platforms</p>
<p>Product add-ons</p>
<p>Web3</p>
<p>Physical Products</p>
<p>AI</p>
<p>Ecommerce</p>
<p>Family</p>
<p>Lifestyle</p>
</div>
</div>
</div> }












<button>News</button>
<button>Community</button>
<button>Advertise</button>
</nav>

<div className="main-page-header-sucscribe-and-sign-btn-div">

<button>Subscribe</button>
<button>Sign in</button>


</div>



</header>










</>)







}