import { useParams } from "react-router-dom";

const ProjectShowPage = () => {
    const { id } = useParams();
    if (id > 15) {
        console.log('cest pas bon', id);
    }
    return (
        <h1>Je suis sur la page d'un sujet</h1>
    );
};

export default ProjectShowPage;