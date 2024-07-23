import React from "react";
import styles from "./focus-new-comp.module.css"
import PropTypes from 'prop-types';


export default function FocusNewComp(props) {
    const { item } = props
    const { title } = item;
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
        author: PropTypes.string,
        urlToImage: PropTypes.string,
        publishedAt: PropTypes.string,
        description: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string
    }).isRequired
};
