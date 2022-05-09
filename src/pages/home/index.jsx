import News from '../news/news';
import forum from '../home/image/zonetest.png';
import style from './home.module.css';

const HomePage = () => {

    return (<>
        {/* <h1 className={style.homeImage}></h1> */}
        <div className={style.homeImage}>
            <img src={forum} alt='forum' />
        </div>
        <span className={style.news}><News /></span>
    </>);
};

export default HomePage;


