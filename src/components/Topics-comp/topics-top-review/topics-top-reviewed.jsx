import TopReviewedOnePiece from "./top-reviewed-one-piece-comp"
import styles from "./topics-top-reviewed.module.css"
import React from "react"

export default function TopReviewedComp() {
    return (

        <div className={styles.reviewDiv}>

            <div className={styles.row1}>
                <TopReviewedOnePiece />
                <TopReviewedOnePiece />
            </div>



            <div className={styles.row2}>
                <TopReviewedOnePiece />
                <TopReviewedOnePiece />
            </div>



        </div>


    )
}