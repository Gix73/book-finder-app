import s from "./bookFinder.module.css";

const BookNameInp = () => {
  return (
    <div className={s.finder_container}>
      <div className={s.name_input_wrappepr}>
        <input className={s.name_input} type="text" />
        <button className={s.button_img}></button>
      </div>
    </div>
  );
};

export default BookNameInp;
