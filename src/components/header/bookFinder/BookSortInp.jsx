import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./bookFinder.module.css";

const BookSortInp = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [sortType, setSortType] = useState("");

  function changeSort() {
    dispatch({
      type: "CHANGE_SORT",
      payload: {
        category: category,
        sortType: sortType,
      },
    });
  }

  useEffect(() => {
    changeSort();
  });

  return (
    <div className={s.sort_wrapper}>
      <div className={s.data_container}>
        <span>Categories</span>
        <select
          className={s.select}
          name=""
          id=""
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
      </div>
      <div className={s.data_container}>
        <span>Sorting by</span>
        <select
          className={s.select}
          name=""
          id=""
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </div>
  );
};

export default BookSortInp;
