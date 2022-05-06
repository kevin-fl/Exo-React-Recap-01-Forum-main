import News from '../news/news';
import forum from './forum.jpg';
import style from './home.module.css';

const HomePage = () => {

    return (<>
        <h1>PORTFOLIO</h1>
        <div className={style.forumImage}>
            <img src={forum} alt='forum' />
        </div>
        <News />
    </>);
};

export default HomePage;


