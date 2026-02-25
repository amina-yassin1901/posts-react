import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
const BASE_URL = "https://699eb30078dda56d396b07fe.mockapi.io/";
function PostForm() {
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
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.titel}>Написать пост</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="title">Заголовок</label>
          <input
            className={styles.input}
            {...register("title", { required: true })}
            type="text"
            id="title"
            placeholder="Заголовок"
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="text">Текст поста</label>
          <textarea
            {...register("text", { required: true })}
            name="text"
            id="text"
            placeholder="Введите текст..."
          ></textarea>
        </div>
        <button type="submit"> Публикация</button>
      </form>
    </div>
  );
}
export default PostForm;
