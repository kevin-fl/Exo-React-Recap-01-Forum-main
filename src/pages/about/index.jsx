import image from './cv.png';
import style from "./about.module.css";

const AboutPage = () => {

    return (
    <>
       {/* <h1 className={style.aboutTitle}></h1> */}
        
        <div class={style.baniere_btn}>
            <a href="#"><span></span>EXPERIENCE </a>
            <a href="#"><span></span> CV </a>

        </div>
        <div className={style.theImage}>
        <img src={image} alt='forum' />
        </div>
        <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat provident maiores doloremque, id ducimus earum nemo omnis laudantium architecto fuga autem blanditiis facilis. Dolor voluptatem ea nisi. Maiores sit cupiditate expedita provident nemo neque quia voluptates atque itaque tenetur vitae doloremque ex rem odio, animi ea ipsa illo, architecto tempore, quaerat obcaecati quidem molestiae nobis consequatur? Quidem soluta, ducimus a tenetur dolorum vero in quibusdam distinctio maiores temporibus perferendis nemo sint officia nihil minus quod repudiandae. Suscipit natus commodi, in aspernatur quo ab quaerat sunt laboriosam distinctio error voluptates odio iusto vel quam omnis amet illo architecto! Sed voluptas placeat animi vel soluta laboriosam sunt voluptatum accusantium dolorem, libero quidem aut vitae, deleniti cum itaque, doloribus error culpa quae rerum saepe eveniet esse? Quia eaque, modi neque quos alias consectetur doloribus error est, veniam quis quae voluptas rerum repellendus ea non facilis minima quam. Pariatur officia sequi error iure perspiciatis soluta exercitationem quia tempora optio dolorum, fuga aut eligendi nam iusto at maxime! Eligendi cum totam delectus culpa minus eveniet optio modi voluptates corrupti iure at iste similique officia adipisci aliquid amet, atque molestias! Eveniet illum corporis sunt laudantium minima, reprehenderit nemo doloribus qui fuga, error ratione assumenda. Nulla.</p>
    </>);
};

export default AboutPage;