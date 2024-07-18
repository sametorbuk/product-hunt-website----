import styles from "./product-rank-comp.module.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullhorn } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types";


export default function RankComp(props) {

    const { product } = props

    const { productname, logo, explanation, introduction,
        shoutoutCount, thoseWhoShoutOut, moreCount, rankNumber } = product


    return (<>


        <div className={styles.RankComp}>

            <div className={styles.rankDiv}>
                <p>#</p>
                <p className={styles.rankNumber}>{rankNumber}</p>
            </div>

            <img className={styles.productLogo} src={logo} alt="" />


            <div className={styles.ProductContent}>

                <div className={styles.contentRow1}>

                    <p className={styles.productName}>{productname}</p>
                    <p>— {explanation}</p>



                </div>

                <p>{introduction}</p>

                <div className={styles.shoutouts}>
                    <FontAwesomeIcon icon={faBullhorn} style={{ color: "#9b9b9d", }} />
                    <p>{shoutoutCount} </p>
                    <p>Shoutouts:</p>

                    {thoseWhoShoutOut.map((item, index) => {
                        return (<>
                            <img key={index} className={styles.shoutoutIcon} src={item.img} alt="" />
                            <p>{item.who}</p>
                        </>)
                    })
                    }

                    <p>and {moreCount} more..</p>
                </div>



            </div>


        </div>






    </>)
}
RankComp.propTypes = {
    product: PropTypes.shape({
        productName: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        explanation: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        shoutoutCount: PropTypes.number.isRequired,
        thoseWhoShoutOut: PropTypes.arrayOf(
            PropTypes.shape({
                img: PropTypes.string.isRequired,
                who: PropTypes.string.isRequired
            })
        ).isRequired,
        moreCount: PropTypes.number.isRequired,
        rankNumber: PropTypes.number.isRequired
    }).isRequired
};

