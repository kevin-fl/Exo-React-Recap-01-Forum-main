import axios from "axios";
import style from "./project.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ProjectPage = () => {

    const [projects, setProjects] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/api/project')
            .then(({ data }) => {
                console.log(data);
                const projectsJSX = data.rows.map(
                    (project) => (
                        <Link to={{ pathname: `./${project.id}` }}>
                            <li key={project.id} className={style.projectTitle}>
                                <div>{project.name}</div>
                                <div>{project.text}</div>
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
            <h1 className={style.pageTitle}>projects</h1>
            {projects}
        </>
    );
};

export default ProjectPage;