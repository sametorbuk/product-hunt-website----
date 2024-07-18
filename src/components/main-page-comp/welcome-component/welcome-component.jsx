
import styles from "./welcome-component.module.css"
import React, { useEffect, useState } from "react"



export default function WelcomeComponent() {
    const [visible, setVisible] = useState(true)



    useEffect(() => {
        setVisible(true)
    }, [])

    const handleClose = () => {
        setVisible(!visible)
    }


    return (<>
        {visible &&
            <div className={styles.welcomeDiv}>

                <button onClick={handleClose} className={styles.button}>x</button>
                <h2 className={styles.title}>Welcome to Product Hunt 👋</h2>
                <div className={styles.rowp}>
                    <p className={styles.p}>The place to launch and discover new tech products. </p>
                    <p className={styles.p2} > Take a tour.</p>

                </div>


            </div>}





    </>)
}