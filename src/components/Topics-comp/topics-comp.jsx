import React from "react";
import styles from "./topics-comp.module.css"
import TopReviewedComp from "./topics-top-review/topics-top-reviewed";
import RankComp from "./RankComp/product-rank-comp";
import PropTypes from "prop-types";

export default function TopicsPage(props) {
    const { ranksProductData, topicsData } = props


    return (

        <div className={styles.mainContent}>

            <div className={styles.leftContent}>
                <div className={styles.header}>
                    <div className={styles.headerRow1}>

                        <p>{`Topics >`} </p>
                        <p>{`${topicsData.category} >`}</p>
                        <p>{topicsData.topicname}</p>

                    </div>

                    <div className={styles.titleAndBtn}>

                        <h2>{topicsData.topicname}</h2>
                        <button className={styles.followBtn}>Follow</button>

                    </div>
                    <p>{topicsData.introduction}</p>

                    <TopReviewedComp />

                    <div className={styles.productByRankBtn}>

                        <button className={styles.optionsBtn}>Most Loved</button>
                        <button className={styles.optionsBtn} >Top Products</button>
                        <button className={styles.optionsBtn} >Recent Review</button>





                    </div>


                    {ranksProductData.map((product, index) => {

                        return (<>
                            <RankComp key={index} product={product} />
                        </>)


                    })}





                </div>







            </div>








            <div className={styles.rightContent}>
                <p>samet</p>
            </div>




        </div>







    )
}



TopicsPage.propTypes = {
    ranksProductData: PropTypes.arrayOf(
        PropTypes.shape({
            productName: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
            explanation: PropTypes.string.isRequired,
            introduction: PropTypes.string.isRequired,
            shoutoutCount: PropTypes.number.isRequired,
            thoseWhoShoutOut: PropTypes.arrayOf(
                PropTypes.shape({
                    img: PropTypes.string.isRequired,
                    who: PropTypes.string.isRequired,
                })
            ).isRequired,
            moreCount: PropTypes.number.isRequired,
            rankNumber: PropTypes.number.isRequired,
        })
    ).isRequired,
    topicsData: PropTypes.shape({
        category: PropTypes.string.isRequired,
        topicname: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
    }).isRequired,
};
