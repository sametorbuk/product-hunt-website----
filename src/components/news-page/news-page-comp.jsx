import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NewsComp from "./news-comp/news-comp";
import styles from "./new-page-comp.module.css"

export default function NewsPage(props) {
    const { setFocusNewInfo } = props


    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [istek, setIstek] = useState(0)

    const [category, setCategory] = useState("")

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


    const newCategoryClickHandler = (e) => {
        setCategory(e.target.value)
    }


    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?q=${category}&apiKey=af2af317bc7b41ad9dcc4e30654c06f5`;
        const fetchNews = () => {

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
    }, [category]);

    const firstFour = news.slice(0, 4)
    const secondFour = news.slice(4, 8)
    const thirdFour = news.slice(8, 12)


    return (<>

        <button className={styles.categoryBtn}> NEWS CATEGORIES</button>

        <div className={styles.newsOptions}>
            <button onClick={clickHandler}>GENERAL</button>
            <button value="trump" onClick={newCategoryClickHandler}>TRUMP </button>
            <button value="technology" onClick={newCategoryClickHandler}>TECHNOLOGY </button>
            <button value="science" onClick={newCategoryClickHandler} >SCIENCE </button>
            <button value="health" onClick={newCategoryClickHandler} >HEALTH </button>
            <button value="business" onClick={newCategoryClickHandler} >BUSINESS </button>


        </div>
        <div className={styles.newsPage}>

            <div className={styles.row}>
                {firstFour.map((item, index) => {
                    return <NewsComp setFocusNewInfo={setFocusNewInfo} key={index} item={item} />
                })}

            </div>


            <div className={styles.row}>
                {secondFour.map((item, index) => {
                    return <NewsComp setFocusNewInfo={setFocusNewInfo} key={index} item={item} />
                })}

            </div>


            <div className={styles.row}>
                {thirdFour.map((item, index) => {
                    return <NewsComp setFocusNewInfo={setFocusNewInfo} key={index} item={item} />
                })}

            </div>

        </div>


    </>)
}