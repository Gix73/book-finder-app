import BookCard from "./booksData/BookCard";
import s from "./BooksPage.module.css";

const BooksPage = () => {
  return (
    <div className={s.container}>
      <h2>Found x results</h2>
      <div className={s.books_wrapper}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default BooksPage;
