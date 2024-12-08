import styles from './PostForm.module.css';

function PostForm() {
    return (
        <form>
            <div>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} />
            </div>
            <div>
                <label htmlFor="name">Author</label>
                <input type="text" id="name" required />
            </div>
        </form>
    );
}

export default PostForm;