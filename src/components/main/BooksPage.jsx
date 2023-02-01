import { useDispatch, useSelector } from "react-redux";
import { customFetch } from "../header/bookFinder/BookNameInp";
import BookCard from "./booksData/BookCard";
import s from "./BooksPage.module.css";

const BooksPage = () => {
  const books = useSelector((state) => state.books.booksData);
  console.log(books);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.books);

  async function loadMoreBooks() {
    let pageNum = data.page + 1;

    dispatch({
      type: "ADD_PAGE",
      payload: {
        page: pageNum,
      },
    });

    let fetchRes = await customFetch(
      data.search,
      data.category,
      data.typeOfSort,
      data.page + 1
    );

    dispatch({
      type: "LOAD_MORE",
      payload: {
        data: [...fetchRes.items],
        page: data.page,
      },
    });
  }

  return (
    <div className={s.container}>
      <h2>Found x results</h2>
      <div className={s.books_wrapper}>
        <BookCard bookItems={books} />
      </div>
      <div className={s.load_button} onClick={loadMoreBooks}>
        Load more
      </div>
    </div>
  );
};

export default BooksPage;
