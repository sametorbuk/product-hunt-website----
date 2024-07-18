import React from "react";
import styles from "./topics-top-reviewed.module.css"




export default function TopReviewedOnePiece() {
    return (<>


        <div className={styles.row1Left}>

            <div className={styles.row1Leftrow1}>
                <img className={styles.img} src="https://ph-files.imgix.net/a40d2c51-e2c9-41c5-8547-b3e80050a745.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=60&h=60&fit=crop&dpr=2" alt="" />
                <p className={styles.explanation}>Corexta
                    All-in-One Agency</p>
                <p>★★★★★</p>

            </div>

            <div className={styles.userArea}>
                <img className={styles.userPhoto} src="https://ph-avatars.imgix.net/7012940/eaf0b28c-139f-4694-a45d-da02367ff216.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=20&h=20&fit=crop&dpr=2" alt="" />

                <p>As a small business owner, Corexta has been a game-changer for us. Its like having an entire</p>
            </div>


        </div>

    </>)
}