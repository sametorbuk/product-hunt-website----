import styles from "./topics-top-reviewed.module.css"
import React from "react"

export default function TopReviewedComp(){
    return(

       <div className={styles.reviewDiv}>

           <div className={styles.row1}>

            <div className={styles.row1Left}>

               <div className={styles.row1Leftrow1}></div>




            </div>
               <div className={styles.row1Right}>

               <div className={styles.row1Rightrow1}></div>



               </div>



           </div>
           <div className={styles.row2}>


           <div className={styles.row2Left}>
           <div className={styles.row2Leftrow1}></div>

</div>
   <div className={styles.row2Right}>
   <div className={styles.row2Rightrow1}></div>





   </div>







           </div>


       </div>




    )
}