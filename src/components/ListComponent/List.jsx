import { useState } from 'react';

import styles from './List.module.css';
import Post from "../PostComponent/Post";
import PostForm from "../PostFormComponent/PostForm";

function List() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
        <PostForm onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
        <ul className={styles.postList}>
            <li className={styles.postListItem}>
                <Post author={enteredAuthor} body={enteredBody} />
            </li>
            <li className={styles.postListItem}>
                <Post author="Michael" body="This is the second post" />
            </li>
        </ul>
        </>
    )
}

export default List