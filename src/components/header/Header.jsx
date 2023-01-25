import BookNameInp from "./bookFinder/BookNameInp";
import BookSortInp from "./bookFinder/BookSortInp";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <h1>Search for books</h1>
        <BookNameInp />
        <BookSortInp />
      </div>
    </header>
  );
};

export default Header;
