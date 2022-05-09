import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

//formulaire commentaires va permettre de post si lauthorisation token est correct , en fonction de la reponse si c est okay 
const CommentForm = ({ projectId, request }) => {
    const userData = useSelector(state => state.user);
    const { register, handleSubmit } = useForm();
    const onSent = (data) => {
        axios.post(`http://localhost:8080/api/project/${projectId}/commentaire`, data, {
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        })
            .then(response => {
                request(response);
            });
    };

    //↓si c est okay on fais un handleSubmit sur la const onsent donc sur axios.post 
    return (
        <>
            <form onSubmit={handleSubmit(onSent)}>
                <label htmlFor="comment-form-content"></label>
                <textarea {...register('content', { required: true })}></textarea>
                <input type="submit" value="send" />

            </form>

        </>
    );
};

export default CommentForm;

