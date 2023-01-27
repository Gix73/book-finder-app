import s from "./BookCard.module.css";
import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <Link to="/bookinfo" className={s.hover_link}>
      <div className={s.content_wrapper}>
        <div className={s.img_wrapper}></div>
        <div className={s.text_wrapper}>
          <span className={s.text}>Computers</span>
          <h3 className={s.text}>Book's name</h3>
          <span className={s.text}>Authors</span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
