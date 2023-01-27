import BookInfo from "../../components/main/bookInfo/BookInfo";
import s from "./BookPage.module.css";

const BookPage = () => {
  return (
    <main className={s.main}>
      <BookInfo />
    </main>
  );
};

export default BookPage;
