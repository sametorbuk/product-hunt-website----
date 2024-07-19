import TopReviewedOnePiece from "./top-reviewed-one-piece-comp"
import styles from "./topics-top-reviewed.module.css"
import React from "react"

import { currentTopReviewed } from "../../../top-reviewed"

export default function TopReviewedComp() {

    const firstTwo = currentTopReviewed.slice(0, 2)
    const secondTwo = currentTopReviewed.slice(2, 4)



    return (

        <div className={styles.reviewDiv}>

            <div className={styles.row1}>
                {firstTwo.map((item, index) => {
                    return <TopReviewedOnePiece key={index} item={item} />
                })}
            </div>



            <div className={styles.row2}>
                {secondTwo.map((item, index) => {
                    return <TopReviewedOnePiece key={index} item={item} />
                })}
            </div>



        </div>


    )
}