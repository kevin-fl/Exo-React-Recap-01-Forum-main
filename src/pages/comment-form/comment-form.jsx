import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

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
                request();
            });
    };

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

