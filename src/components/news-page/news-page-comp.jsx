import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NewsComp from "./news-comp/news-comp";
import styles from "./new-page-comp.module.css"

export default function NewsPage() {

    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [istek, setIstek] = useState(0)

    useEffect(() => {
        const fetchNews = () => {
            const url = " https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=5890c5f9e4234175b9e7d4d36dbd17ad";
            console.log(error)
            axios.get(url)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Request failed with status ' + response.status);
                    }
                    setNews(response.data.articles);
                    console.log(news)
                })
                .catch(error => {
                    setError(error.message);

                });
        };

        fetchNews();
    }, [istek]);


    const clickHandler = () => {
        setIstek(istek + 1)
    }


    const firstFour = news.slice(0, 4)
    const secondFour = news.slice(4, 8)
    const thirdFour = news.slice(8, 12)




    return (<>

        <button onClick={clickHandler}>YENİ REQUEST GÖNDER</button>

        <div className={styles.newsPage}>

            <div className={styles.row}>
                {firstFour.map((item, index) => {
                    return <NewsComp key={index} item={item} />
                })}

            </div>


            <div className={styles.row}>
                {secondFour.map((item, index) => {
                    return <NewsComp key={index} item={item} />
                })}

            </div>


            <div className={styles.row}>
                {thirdFour.map((item, index) => {
                    return <NewsComp key={index} item={item} />
                })}

            </div>

        </div>


    </>)
}