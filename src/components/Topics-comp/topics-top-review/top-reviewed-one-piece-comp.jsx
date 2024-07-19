import React from "react";
import styles from "./topics-top-reviewed.module.css"





export default function TopReviewedOnePiece(props) {
    const { item } = props
    const { productname, productImg, explanation, userPhoto, comment } = item

    return (<>


        <div className={styles.row1Left}>

            <div className={styles.row1Leftrow1}>
                <img className={styles.img} src={productImg} alt="" />
                <p className={styles.explanation}>{productname}</p>
                <p>{explanation}</p>
                <p>★★★★★</p>

            </div>

            <div className={styles.userArea}>
                <img className={styles.userPhoto} src={userPhoto} alt="" />

                <p>{comment}</p>
            </div>


        </div>

    </>)
}