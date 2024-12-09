import { useState } from 'react';

import styles from './PostForm.module.css';

function PostForm(props) {
    return (
        <form>
            <div>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange} />
            </div>
            <div>
                <label htmlFor="name">Author</label>
                <input type="text" id="name" required onChange={props.onAuthorChange} />
            </div>
        </form>
    );
}

export default PostForm;