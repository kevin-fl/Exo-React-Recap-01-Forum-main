import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRedirectNotAdmin } from "../../hooks/redirect-hook";
import style from "./admin.module.css";

const AdminProjects = () => {
    useRedirectNotAdmin();
    const user = useSelector(state => state.user);
    console.log(user);
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/api/project')  // axios.get retourne une promise , on fait un point then pour recup ces d infos 
            .then(
                ({ data }) => {
                    console.log(data);                          // f12 pour check l objet precisement (data)--> recup infos , data , headers  , request etc..... tandis que ({data}) recup ds l objet juste data .
                    setProjects(data.rows);
                }
            );
    }, []);

    //pour delete un projet axios.delete avec l id du projet 
    const projectDelete = (id) => {

        axios.delete(`http://localhost:8080/api/project/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(
                (response) => {
                    console.log(response);
                    setProjects(projects.filter(project => project.id !== id));
                }
            );
    };
// projects.map va permettre de recup ttes les données sous forme de tableau 
//recupere le project.id et le project.name 
//button on click pour recup la logique de la const projectdelete et delete le projet.id 
    const projectsJSX = projects.map(
        project => (
            <li key={project.id}>
                <div>
                    <span>{project.id} - {project.name}</span>
                    <Link to={`./${project.id}`}>                                
                        <span className={style.button}><button>Edit</button></span>
                    </Link>
                    <button onClick={() => { projectDelete(project.id); }}>Delete</button>
                </div>
            </li>
        )
    );

    return (
        <>
            {projectsJSX}
            <button className={style.addNew}>Add New</button>
        </>
    );
};

export default AdminProjects;