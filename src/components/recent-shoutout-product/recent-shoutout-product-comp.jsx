import "./recent-shoutout-product-comp.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons"


export default function RecentShoutoutProductComp(){


    return(<>
    
    <div className="recent-product-comp-div">
     <div className="recent-product-info">
          
          <img className="recent-product-photo" src="https://ph-files.imgix.net/6c3ee8b9-7869-4500-9b26-8121c23d8ef2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2" alt="" />
        
            <div className="recent-product-info-explanation">
               
               <p>Sugar free: Food Scanner —</p>
               

          </div>


     </div>
     <div className="recent-product-explanation">

         <p>Shouted out <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} />Heroku</p>
         <p >Allows quickly testing multiple open models side-by-side.</p>
      

     </div>


    </div>
 
    
    
    
    
    
    </>)
}