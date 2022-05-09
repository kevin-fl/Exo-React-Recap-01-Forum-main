import axios from "axios";
import style from "./project.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./dev.png";

const ProjectPage = () => {

    const [projects, setProjects] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/api/project')
            .then(({ data }) => {
                console.log(data);
                const projectsJSX = data.rows.map(
                    (project) => (
                        <Link to={{ pathname: `./${project.id}` }} key={project.id}>
                            <li className={style.projectTitle}>
                                {/* <div>{project.name}</div> */}
                                {/* <div>{project.text}</div> */}
                                <div><img width="200" src={`./${project.image}`} alt={project.name} /></div>
                            </li>
                        </Link >
                    )
                );
                setProjects(projectsJSX);
            });
    }, []);

    return (
        <>

            <div className={style.pageTitle}>
                <img src={image} alt="image" />
            </div>
            <ul className={style.ul}>{projects}</ul>
        </>
    );
};

export default ProjectPage;