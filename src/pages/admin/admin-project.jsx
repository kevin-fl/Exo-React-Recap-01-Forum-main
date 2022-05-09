import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useRedirectNotAdmin } from "../../hooks/redirect-hook";

const AdminProject = () => {

    useRedirectNotAdmin();

    const [project, setProject] = useState();

    const { register, handleSubmit } = useForm();
    const { id } = useParams();

    useEffect(() => {

        axios.get(`http://localhost:8080/api/project/${id}`)
            .then(({ data }) => {
                console.log(data);
                setProject(data);
            });

    }, []);

    console.log(project);


    const onSubmit = (data) => {
        console.log(data);
    };

    //creation d un formulaire coté admin pour edit les projets 

    return (
        <>
            <p>Project Edit</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input value={project && project.name} {...register('name')} />
                </div>
                <div>
                    <label htmlFor="image">Image: </label>
                    <input value={project && project.image} {...register('image')} />
                </div>
                <div>
                    <label htmlFor="text">Text: </label>
                    <textarea value={project && project.text} {...register('text')}></textarea>
                </div>
                <input type="button" value="Send" />
            </form>
        </>
    );

};

export default AdminProject;