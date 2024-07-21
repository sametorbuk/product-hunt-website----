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


FocusNewComp.propTypes = {
    item: PropTypes.shape({
        author: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired,
        publishedAt: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,