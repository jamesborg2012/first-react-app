import styles from './List.module.css';
import Post from "../PostComponent/Post"

function List() {
    return (
        <ul className={styles.postList}>
            <li className={styles.postListItem}>
                <Post author="James" body="This is the first post" />
            </li>
            <li className={styles.postListItem}>
                <Post author="Michael" body="This is the second post" />
            </li>
        </ul>
    )
}

export default List