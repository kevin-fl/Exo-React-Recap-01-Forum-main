import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../../components/comment-form/comment-form";

const ProjectShowPage = () => {
    const [currentProject, setCurrentProject] = useState();
    const [errorMessage, setErrorMessage] = useState('');
//↑ on utilise les usestate pour recup les data du projets ainsi que les messages d erreurs 

//↓on recup touts les params ensuite juste les id de tous les projets 
const recupeTtLesParams = useParams();
const id = recupeTtLesParams.id;

//Le hook useEffect est un hook qui va permettre de déclencher une fonction de manière asynchrone lorsque 
//l'état du composant change. Cela peut permettre d'appliquer des effets de bords ou peut permettre de reproduire la logique

useEffect(() => {
        requestProject();
    }, []);

    const requestProject = () => {
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
    };
    console.log(currentProject);

    const renderComments = (comments) => {
        return comments.map(
            (comment) => <li key={comment.id}>{comment.user.pseudo}: {comment.content}</li>
            //↑va renvoyer les infos.map sous forme de li avec id , pseudo , content 
        );
    };

    return (
        <>
            {
                currentProject ?  // 
                    <>
                        <h1>{currentProject && currentProject.name}</h1>
                        <p>{currentProject && currentProject.text}</p>
                        <img src={`/${currentProject && currentProject.image}`} alt={currentProject && currentProject.name} />
                        <h2>Commentaires</h2>
                        <ul>{renderComments(currentProject.commentaires)}</ul>
                        {/* ↑on appelle la const rendercomments pour afficher les id , pseudo  content du currentProject */}
                        <CommentForm request={requestProject} projectId={id} />
                        {/* recupere la logique de la const requestProject request si le projet existe ou pas , via les id du projet */}
                    </>
                    :
                    <h1>Loading ...</h1>
            }
        </>
    );
};

export default ProjectShowPage;


