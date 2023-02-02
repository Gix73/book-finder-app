import { useDispatch, useSelector } from "react-redux";
import { customFetch } from "../header/bookFinder/BookNameInp";
import BookCard from "./booksData/BookCard";
import s from "./BooksPage.module.css";
import preloader from "../../images/spinner.svg";

const BooksPage = () => {
  const books = useSelector((state) => state.books.booksData);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.books);

  async function loadMoreBooks() {
    dispatch({
      type: "IS_FETCHING",
      payload: {
        isFetching: true,
      },
    });

    let fetchRes = await customFetch(
      data.search,
      data.category,
      data.typeOfSort,
      data.page,
      data.updateItemsCount
    );

    dispatch({
      type: "IS_FETCHING",
      payload: {
        isFetching: false,
      },
    });

    if (fetchRes.items !== undefined) {
      dispatch({
        type: "LOAD_MORE",
        payload: {
          data: [...fetchRes.items],
          page: data.page + data.updateItemsCount,
        },
      });
    } else {
      alert("No more such books in store.");
    }
  }

  return (
    <div className={s.container}>
      <h2>{`Found ${data.totalItems} results`}</h2>
      <div className={s.books_wrapper}>
        <BookCard bookItems={books} />
      </div>
      <div className={s.load_button} onClick={loadMoreBooks}>
        {data.isFetching ? (
          <div className={s.preloader_wrapper}>
            <img src={preloader} className={s.preloader} alt="Preloader" />
          </div>
        ) : null}
        <span>Load more</span>
      </div>
    </div>
  );
};

export default BooksPage;
