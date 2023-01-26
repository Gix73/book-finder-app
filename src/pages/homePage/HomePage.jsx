import BooksPage from "../../components/main/BooksPage";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={s.main}>
      <BooksPage />
    </main>
  );
};

export default HomePage;
