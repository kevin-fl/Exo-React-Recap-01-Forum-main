import News from '../news/news';
import forum from '../home/image/zonetest.png';
import style from './home.module.css';


// pour styliser la page en module.css , appelle la page News(const) pour styliser les news sur la page home 
const HomePage = () => {

    return (<>
        <div className={style.homeImage}>
            <img src={forum} alt='forum' />
        </div>
        <span className={style.news}><News /></span>
    </>);
};

export default HomePage;


