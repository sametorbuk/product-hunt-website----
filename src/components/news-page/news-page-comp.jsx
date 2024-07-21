import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function NewsPage() {

    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [istek, setIstek] = useState(0)

    useEffect(() => {
        const fetchNews = () => {
            const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=5890c5f9e4234175b9e7d4d36dbd17ad";
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



    return (<>

        <button onClick={clickHandler}>YENİ REQUEST GÖNDER</button>







    </>)
}