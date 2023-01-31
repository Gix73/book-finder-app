import { useSelector } from "react-redux";
import BookCard from "./booksData/BookCard";
import s from "./BooksPage.module.css";

const BooksPage = () => {
  const books = useSelector((state) => state.books.booksData);
  console.log(books);

  return (
    <div className={s.container}>
      <h2>Found x results</h2>
      <div className={s.books_wrapper}>
        <BookCard bookItems={books} />
      </div>
    </div>
  );
};

export default BooksPage;
