import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../comment-form/comment-form";

const ProjectShowPage = () => {
    const [currentProject, setCurrentProject] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    const recupeTtLesParams = useParams();
    const id = recupeTtLesParams.id;
    useEffect(() => {
        axios.get(`http://localhost:8080/api/project/${id}`)
            .then(
                (donnees) => {
                    const project = donnees.data;
                    setCurrentProject(project);
                },
                (error) => {
                    const message = error.response.data.message;
                    setErrorMessage(message);
                }
            );
    }, []);

    console.log(currentProject);

    const renderComments = (comments) => {
        return comments.map(
            (comment) => <li key={comment.id}>{comment.user.pseudo}: {comment.content}</li>
        );
    };

    return (
        <>
            {
                currentProject ?
                    <>
                        <h1>{currentProject && currentProject.name}</h1>
                        <p>{currentProject && currentProject.text}</p>
                        <img src={`/${currentProject && currentProject.image}`} alt={currentProject && currentProject.name} />
                        <h2>Commentaires</h2>
                        <ul>{renderComments(currentProject.commentaires)}</ul>
                        <CommentForm />
                    </>
                    :
                    <h1>Loading ...</h1>
            }
        </>
    );
};

export default ProjectShowPage;


