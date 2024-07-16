import "./recent-shoutout-product-comp.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons"


export default function RecentShoutoutProductComp(props){
 const {product}=props
const {name , exp1 , logo ,exp2 , platform}=product
    
    return(<>
    
    <div className="recent-product-comp-div">
     <div className="recent-product-info">
          
          <img className="recent-product-photo" src={logo} alt="" />
        
            <div className="recent-product-info-explanation">
               <p style={{fontWeight:"bold"}}>{name}--</p>
               <p>{exp1}</p>
               

          </div>


     </div>
     <div className="recent-product-explanation">

         <p>Shouted out <img className="platform-photo" src={platform} alt="" /> Heroku</p>
         <p className="recent-product-explanation" >{exp2}</p>
      

     </div>


    </div>
 
    
    
    
    
    
    </>)
}