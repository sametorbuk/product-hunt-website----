import React from "react";
import styles from "./topics-comp.module.css"
import TopReviewedComp from "./topics-top-review/topics-top-reviewed";
import RankComp from "./RankComp/product-rank-comp";
import PropTypes from "prop-types";

import { communityImg } from "../../community-img-data";
import Footer from "../footer-comp/footer-comp";

const first10 = communityImg.slice(0, 10)
const second10 = communityImg.slice(10, 20)
const third10 = communityImg.slice(8, 18)
const fourth10 = communityImg.slice(11, 21)


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

                <div className={styles.communityDiv}>
                    <p className={styles.p}>PRODCUTIVITY COMMUNITY</p>

                    <div className={styles.imgContainer}>

                        {first10.map((item, index) => {
                            return <img key={index} src={item} alt="" />
                        })}


                    </div>


                    <div className={styles.imgContainer}>

                        {second10.map((item, index) => {
                            return <img key={index} src={item} alt="" />
                        })}

                    </div>


                    <div className={styles.imgContainer}>

                        {third10.map((item, index) => {
                            return <img key={index} src={item} alt="" />
                        })}



                    </div>


                    <div className={styles.imgContainer}>


                        {fourth10.map((item, index) => {
                            return <img key={index} src={item} alt="" />
                        })}





                    </div>





                </div>


                <Footer />


            </div>




        </div>







    )
}



TopicsPage.propTypes = {
    ranksProductData: PropTypes.arrayOf(
        PropTypes.shape({

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
