import styles from "./header-btn-hover-comp.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faRocket, faMessage, faFire, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function HoveredComp(props){
const {array , stateChange}=props



return(<>


<div   
onMouseEnter={() => stateChange(true)} 
onMouseLeave={() => stateChange(false)}    
className={styles.hoverComp}>


{array.map((item)=>{
    
return           <div className={styles.row1}>
               <FontAwesomeIcon  style={{color:item.color}} className={styles.icon1} icon={item.code} />
        <div className={styles.row1Right}>
                 <p>{item.ex1}</p>
                 <p>{item.ex2}</p>
  </div>
</div>

})}
</div>
</>)
}