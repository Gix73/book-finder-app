import book from "../../../images/book.jpg";
import s from "./BookCard.module.css";

const BookCard = () => {
  return (
    <div className={s.content_wrapper}>
      <div className={s.img_wrapper}></div>
      <div className={s.text_wrapper}>
        <span className={s.text}>Computers</span>
        <h3 className={s.text}>Book's name</h3>
        <span className={s.text}>Authors</span>
      </div>
    </div>
  );
};

export default BookCard;
