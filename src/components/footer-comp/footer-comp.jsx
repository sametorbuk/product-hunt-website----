import React from "react";
import styles from "./footer-comp.module.css"
import { Link } from "react-router-dom";


export default function Footer() {

    return (<>


        <div className={styles.footerDiv}>

            <Link className={styles.link}> <p>Blog</p></Link>
            <Link className={styles.link}> <p>Newletter</p></Link>
            <Link className={styles.link}> <p>Questions</p></Link>
            <Link className={styles.link}> <p>Categories</p></Link>
            <Link className={styles.link}> <p>Apps</p></Link>
            <Link className={styles.link}> <p>About</p></Link>
            <Link className={styles.link}> <p>FAQ</p></Link>
            <Link className={styles.link}> <p>Terms</p></Link>
            <Link className={styles.link}> <p>Privacy and Cookies</p></Link>
            <Link className={styles.link}> <p>Twitter</p></Link>
            <Link className={styles.link}> <p>Instagram</p></Link>
            <Link className={styles.link}> <p>Lİnkedin</p></Link>
            <Link className={styles.link}> <p>Youtube</p></Link>
            <Link className={styles.link}> <p>Advertise</p></Link>

            <p className={styles.brand}>© 2024 PRODUCT HUNT</p>


        </div>








    </>)
}