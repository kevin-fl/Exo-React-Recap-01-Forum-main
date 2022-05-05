const CommentForm = () => {


    return (
        <>
            <form>
                <label htmlFor="comment-form-content"></label>
                <textarea name="content" id="comment-form-content" cols="30" rows="10"></textarea>
                <input type="submit" value="send" />

            </form>

        </>
    );
};

export default CommentForm;

