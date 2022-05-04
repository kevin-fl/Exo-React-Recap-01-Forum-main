import axios from 'axios';
import forum from './forum.jpg';
import style from './home.module.css';

const HomePage = () => {
    axios.get('http://localhost:8080/api/news')
        .then(({ data }) => {
            console.log(data);
        }).catch(() => {
            // dispatch(userSendError());
        });
    return (<>
        <h1>Accueil</h1>
        <p>Bienvenue sur le forum</p>
        <div className={style.forumImage}>
            <img src={forum} alt='forum' />
        </div>
    </>);
};

export default HomePage;