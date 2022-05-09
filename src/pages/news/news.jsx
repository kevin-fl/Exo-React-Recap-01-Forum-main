import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {

    const [news, setNews] = useState([]);
//↓un use effect va s utiliser une fois , c est pour ca qu'on met un tableau vide a la fin pour eviter une boucle infini . get via l url de l api les news ensuite on va setNews les data.rows pour creer la nouvelle valeur de const news ln7
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
//↑magic quote pour specifier l environnement jsx aini que le $ et les {} on recup le singleNews.name,singleNews.category etc ..
    console.log(news);

    return (
        <>

            <ul>
                {newsJsx}
            </ul>


        </>
//↑on return ds le composant jsx la const newsJsx avec la logique de recuperation de data precise sur les news . car l objet contient bcp plus d infos , on specifie pour limiter la recup d infos .
    );
};


export default News;