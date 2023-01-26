import s from "./bookFinder.module.css";

const BookSortInp = () => {
  return (
    <div className={s.sort_wrapper}>
      <div className={s.data_container}>
        <span>Categories</span>
        <select className={s.select} name="" id="">
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
        <select className={s.select} name="" id="">
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </div>
  );
};

export default BookSortInp;
