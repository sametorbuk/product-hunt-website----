import React from "react";
import styles from "./topics-comp.module.css"


export default function TopicsComponent() {

    return (

        <div className={styles.mainContent}>

            <div className={styles.leftContent}>
                <div className={styles.header}>
                    <div className={styles.headerRow1}>

                        <p>{`Topics >`} </p>
                        <p>{`Development >`}</p>
                        <p>Artifical Intelligence</p>

                    </div>

                    <div className={styles.titleAndBtn}>

                        <h2>Artifical Intelligence</h2>
                        <button className={styles.followBtn}>Follow</button>

                    </div>
                    <p>The future is AI. From poetry writing to
                        tackling tedious tasks, AI apps can
                        automate almost anything (yes, really)</p>

                
                
                
                
                
                
                
                
                
                
                </div>







            </div>








            <div className={styles.rightContent}>
                <p>samet</p>
            </div>




        </div>







    )
}