import React from "react";
import PropTypes from "prop-types";
import styles from "./news-comp.module.css";

function NewsComp(props) {
    const { item } = props;
    const { author, urlToImage, publishedAt, description, title } = item;

    return (
        <div className={styles.newsDiv}>
            <img className={styles.newsImg} src={urlToImage} alt="" />
            <p className={styles.title}>{title}</p>
            <p>{description}</p>
            <div className={styles.info}>
                <div className={styles.authorAndDate}>
                    <p className={styles.left}>Author:</p>
                    <p>{author}</p>
                </div>
                <div className={styles.authorAndDate}>
                    <p className={styles.left}>Published:</p>
                    <p>{publishedAt}</p>
                </div>
            </div>
        </div>
    );
}

NewsComp.propTypes = {
    item: PropTypes.shape({
        author: PropTypes.string.isRequired,

        publishedAt: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default NewsComp;