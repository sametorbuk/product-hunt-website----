import "./product-component.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import{faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faTwitter , faFacebook , faApple , faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { useState , useEffect } from "react";
import ProductMoreİnfoComponent from "./product-more-info-comp";
import React from 'react';
 

export default function ProductComponent(props) {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  const { logo, name,explanation, count,firstbtn ,secondbtn,thirdbtn , photo , introduction}=props
 const toggleModal1 = () => {
      setIsModal1Open(!isModal1Open);
   }

   const toggleModal2 = () => {
    setIsModal2Open(!isModal2Open);
 }
const handleClickOutside = (event) => {
      if (event.target.closest('.signup-to-vote-screen' && event.target.closest(".product-more-info")) === null) {
        setIsModal1Open(false);
        setIsModal2Open(false);
      }
    };

 useEffect(() => {
      if (isModal1Open || isModal2Open) {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener("scroll" , handleClickOutside)
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener("scroll" , handleClickOutside)
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener("scroll" , handleClickOutside)
      };
    }, [isModal1Open , isModal2Open]);




return(<>

<div className="product-main-div">
   <div onClick={toggleModal2} className="product-main-div-left">
<img style={{width:"4rem"}} src={logo} alt="" />

<div className="product-component-center">
 <div className="product-component-center-row1">
    <p>{name}  —</p>
    <p style={{marginLeft:"8px"}}>{explanation}</p>
    <FontAwesomeIcon style={{marginLeft:"7px"}} icon={faArrowRightFromBracket} />
 </div>
 
 
 
 <div className="product-component-center-row2">
 <p>{count}<FontAwesomeIcon icon={faComment} style={{color: "#616161",}} /></p>
 <p className="product-component-center-row2-p">{firstbtn}</p>
 <p className="product-component-center-row2-p" >{secondbtn}</p>
 <p className="product-component-center-row2-p" >{thirdbtn}</p>
 </div>



</div>
</div>

{isModal2Open && <ProductMoreİnfoComponent photo={photo} 
introduction={introduction} 
logo={logo} 
explanation={explanation}
 name={name}/> }


<button onClick={toggleModal1} className="product-component-right-btn">
   <FontAwesomeIcon style={{fontSize:"2rem"}} icon={faCaretUp} /></button>

{isModal1Open &&
<div className="signup-to-vote-screen">
<img src="https://ph-static.imgix.net/category-tech/kitty.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=100&h=92&fit=max&dpr=2" alt="" />
<h3>Sign up to vote</h3>
<p>Join our community of friendly folks discovering and sharing the latest products in tech.</p>
<button style={{display:"flex" , alignItems:"center" , background:"#ffffffb8" ,
    height: "3rem",
   paddingLeft: "3rem",
    paddingRight: "4rem" , borderRadius:"5px" , border:"1px solid gray"}}>  <img style={{width: "3rem"}} src="data:image/png;base64,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" alt="" /> Sign with Google</button>
<div className="social-media-btns">
<button><FontAwesomeIcon icon={faTwitter} style={{color: "#74C0FC", fontSize:"x-large"}} /></button>
<button><FontAwesomeIcon icon={faFacebook} style={{color: "rgb(0 99 178 / 94%)", fontSize:"x-large"}} /></button>
<button><FontAwesomeIcon icon={faApple} style={{color: "black", fontSize:"xx-large"}}/></button>
<button><FontAwesomeIcon icon={faLinkedin} style={{color: "hsla(242, 88.4%, 45.3%, 1)", fontSize:"x-large"}} /></button>



</div>



</div>}

</div>

</>)







}