import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRedirectAdmin } from "../../hooks/redirect-hook-admin";

const AdminProjects = () => {
    useRedirectAdmin();
    const user = useSelector(state => state.user);
    console.log(user);
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/api/project')  // axios.get retourne une promise , on fait un point then pour recup ces putains d infos 
            .then(
                ({ data }) => {
                    console.log(data);                          // f12 pour check l objet precisement (data)--> recup infos , data , headers  , request etc..... tandis que ({data}) recup ds l objet juste data .
                    setProjects(data.rows);
                }
            );
    }, []);

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

    const projectsJSX = projects.map(
        project => (
            <li key={project.id}>
                <div>
                    <span>{project.id} - {project.name}</span>
                    <Link to={`./${project.id}`}>
                        <span>Edit</span>
                    </Link>
                    <span onClick={() => { projectDelete(project.id); }}>Delete</span>
                </div>
            </li>
        )
    );

    return (
        <>
            {projectsJSX}
            <button>Add New</button>
        </>
    );
};

export default AdminProjects;