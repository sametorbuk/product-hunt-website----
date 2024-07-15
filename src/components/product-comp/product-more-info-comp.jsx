import "./product-more-info-comp.css"
import {faComment , faBookmark , faShare , faChartSimple} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ProductMoreİnfoComponent(props) {
    const {photo}=props


    return(<>
    
     
    
    
    <div className="product-more-info">

      <img style={{width:"4rem"}} src="https://ph-files.imgix.net/6985828d-62e6-4dd5-91fc-4f76820648d2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2" alt="" />
       <div className="product-more-info-title-row1">

       <div className="product-more-info-title-row1-left">
       <h3 style={{margin:"0"}}>BlitzToksAI
       </h3>
       <p>Faceless AI videos to grow your social media</p>



       </div>


       <button className="visit-btn">Visit</button>
       <button className="upvote-btn">Upvote</button>

 </div>

        
       <div className="product-more-info-interaction-line-div">
        <p style={{flex:"1"}}>Payment Required</p>

        <div className="product-more-info-interaction-line-div-interaction-btns">
            <button><FontAwesomeIcon style={{marginRight:"8px"}} icon={faComment} />Discuss</button>
            <button><FontAwesomeIcon style={{marginRight:"8px"}} icon={faBookmark} />Collect</button>
            <button><FontAwesomeIcon style={{marginRight:"8px"}} icon={faShare} />Share</button>
            <button><FontAwesomeIcon style={{marginRight:"8px"}} icon={faChartSimple} />Stats</button>
        </div>



       </div>

    <p className="product-introduction"> Save time, ditch expensive editing tools, 
        and boost your social media presence with seamless video generation. 
        Our AI-powered platform turns your ideas into high-quality, engaging content instantly. 
        Focus on growth, not editing.</p>

 <p style={{display:"flex", alignItems:"center" , gap:"5px"}}>Launched in
            <button className="options-btn" >Social media</button>
            <button className="options-btn" >Artifical İntelligence</button>
            <button className="options-btn" >video</button>
            <button></button>
            by
            <p style={{color:"blue"}}>BlitsToksAI</p>
            
           
             </p>

            
            
            
             <div className="commenters-prof-photo-div">
              
         
                 {photo.map((item)=> 
                     <div className="commenters-photo-row">
                       {item.map((link)=>{
                          
                          return <img className="commenters-photo " src={link} alt=""/>
                         
                         })}


                     </div>
                )}

             
             
             </div>
            
            <div className="comment-area">
                <img className="commenters-photo" src="https://ph-static.imgix.net/guest-user-avatar.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=36&h=36&fit=crop&dpr=2" alt="" />
                <input className="comment-area-input" type="text" placeholder="What do you think" ></input>
                <button>Login Comment</button>
            </div>
            
            </div>

    
    
    
    
    
    
    </>)
}