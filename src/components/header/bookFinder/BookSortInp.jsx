import s from "./bookFinder.module.css";

const BookSortInp = () => {
  return (
    <div className={s.sort_wrapper}>
      <div className={s.data_container}>
        <span>Categories</span>
        <select className={s.select} name="" id=""></select>
      </div>
      <div className={s.data_container}>
        <span>Sorting by</span>
        <select className={s.select} name="" id=""></select>
      </div>
    </div>
  );
};

export default BookSortInp;
