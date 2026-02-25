import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";
const BASE_URL = "https://699eb30078dda56d396b07fe.mockapi.io/";
import Post from "../post";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 3;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <ul className={styles.list}>
      <h2 className={styles.title}>Posts List</h2>
      {currentPosts.map((post) => {
        return (
          <Post
            title={post.title}
            text={post.text}
            key={post.id}
            id={post.id}
          />
        );
      })}
      <div>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={endIndex >= posts.length}
        >
          Next
        </button>
      </div>
    </ul>
  );
}
export default PostList;
