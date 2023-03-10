import s from "./BookCard.module.css";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <>
      {props.bookItems.map((e, i) => {
        let imgSrc = "";
        let authors = "";
        let title = "";
        let categories = "";
        let imgClass = s.hide;

        if (e.volumeInfo.imageLinks && e.volumeInfo.imageLinks.thumbnail) {
          imgSrc = e.volumeInfo.imageLinks.thumbnail;
          imgClass = s.img;
        }
        if (e.volumeInfo.authors) {
          authors = e.volumeInfo.authors.join(", ");
        }
        if (e.volumeInfo.title) {
          title = e.volumeInfo.title;
        }
        if (e.volumeInfo.categories) {
          categories = e.volumeInfo.categories.join(", ");
        }

        return (
          <Link
            to="/bookinfo"
            className={s.hover_link}
            key={i}
            state={{
              from: "/",
              imgSrc: imgSrc,
              authors: authors,
              title: title,
              categories: categories,
              description: e.volumeInfo.description,
            }}
          >
            <div className={s.content_wrapper}>
              <div className={s.img_wrapper}>
                <img src={imgSrc} className={imgClass} alt="book" />
              </div>
              <div className={s.text_wrapper}>
                <span className={s.text}>{categories.split(",")[0]}</span>
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
