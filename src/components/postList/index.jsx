import styles from "./styles.module.css";
import axios from "axios";
const BASE_URL = "https://699eb30078dda56d396b07fe.mockapi.io/";
import Post from "../post";

function PostList({ posts, setPosts, page, setPage }) {
  const limit = 3;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentPosts = posts.slice(startIndex, endIndex);
  const deletePost = async (id) => {
    try {
      await axios.delete(`${BASE_URL}posts/${id}`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <div className={styles.container}>
      {" "}
      <h2 className={styles.title}>Posts List</h2>
      <ul className={styles.list}>
        {currentPosts.map((post) => {
          return (
            <Post
              title={post.title}
              text={post.text}
              key={post.id}
              id={post.id}
              deleteOne={() => deletePost(post.id)}
            />
          );
        })}
        <div className={styles.btnContainer}>
          <button
            className={styles.btn}
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            className={styles.btn}
            onClick={() => setPage((prev) => prev + 1)}
            disabled={endIndex >= posts.length}
          >
            Next
          </button>
        </div>
      </ul>
    </div>
  );
}
export default PostList;
