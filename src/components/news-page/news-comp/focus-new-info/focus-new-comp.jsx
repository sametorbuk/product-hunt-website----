import React from "react";
import styles from "./focus-new-comp.module.css"


export default function FocusNewComp(props) {
    const { item } = props
    const { author, urlToImage, publishedAt, description, title, content } = item;
    return (<>

        <div className={styles.newsDetailsPage}>

            <h1 className={title}>

                {item.title}

            </h1>
            <p>{item.description}</p>

            <div className={styles.imgAndContent}>
                <img className={styles.mainImg} src={item.urlToImage} alt="" />
                <p>{item.content}</p>

            </div>

        </div>






    </>)
}