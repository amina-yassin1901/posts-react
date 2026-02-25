import styles from "./styles.module.css";
import PostList from "../postList";
import PostForm from "../postForm";
import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "https://699eb30078dda56d396b07fe.mockapi.io/";
function Main() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}posts`);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <main className={styles.main}>
      <PostList
        posts={posts}
        setPosts={setPosts}
        page={page}
        setPage={setPage}
      />
      <PostForm posts={posts} setPosts={setPosts} setPage={setPage} />
    </main>
  );
}
export default Main;
