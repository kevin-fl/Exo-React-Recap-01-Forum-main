import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/news')
            .then(
                ({ data }) => {
                    // console.log(requestData)
                    setNews(data.rows);
                }
            );
    }, []);

    const newsJsx = news.map(
        (singleNews) => (
            <li key={singleNews.id}>
                <div>{singleNews.name}</div>
                <div>{singleNews.category}</div>
                <div><img width=" 300" src={`/${singleNews.Image}`} alt={singleNews.name} /></div>
            </li>

        )
    );

    console.log(news);

    return (
        <>
            <h2>NEWS</h2>
            <p>Hello World</p>
            <ul>
                {newsJsx}
            </ul>


        </>

    );
};


export default News;