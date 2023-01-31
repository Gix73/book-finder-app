import s from "./BookCard.module.css";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <>
      {props.bookItems.map((e) => {
        let imgSrc = e.volumeInfo.imageLinks.thumbnail;
        let authors = e.volumeInfo.authors;
        let title = e.volumeInfo.title;
        let categories = e.volumeInfo.categories.join(" ");
        return (
          <Link to="/bookinfo" className={s.hover_link}>
            <div className={s.content_wrapper}>
              <div className={s.img_wrapper}>
                <img src={imgSrc} className={s.img} alt="" />
              </div>
              <div className={s.text_wrapper}>
                <span className={s.text}>{categories}</span>
                <h3 className={s.text}>{title}</h3>
                <span className={s.text}>{authors}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default BookCard;
