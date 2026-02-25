import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import logo from "/src/assets/userlogo.svg";
const BASE_URL = "https://699eb30078dda56d396b07fe.mockapi.io/";
function PostForm({ posts, setPosts, setPage }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const postData = {
      title: data.title,
      text: data.text,
    };
    axios
      .post(`${BASE_URL}posts`, postData)
      .then((response) => {
        console.log(response);
        setPosts([response.data, ...posts]);
        setPage(1);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Написать пост</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <img src={logo}></img>
        <div className={styles.containersecond}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="title">
              Заголовок
            </label>
            <input
              className={styles.input}
              {...register("title", { required: true })}
              type="text"
              id="title"
              placeholder="Заголовок"
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="text">
              Текст поста
            </label>
            <textarea
              className={styles.input}
              {...register("text", { required: true })}
              name="text"
              id="text"
              placeholder="Введите текст..."
            ></textarea>
          </div>
          <button className={styles.btn} type="submit">
            {" "}
            Публикация
          </button>
        </div>
      </form>
    </div>
  );
}
export default PostForm;
