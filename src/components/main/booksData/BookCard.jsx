import s from "./BookCard.module.css";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <>
      {props.bookItems.map((e) => {
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
          categories = e.volumeInfo.categories[0];
        }

        return (
          <Link to="/bookinfo" className={s.hover_link}>
            <div className={s.content_wrapper}>
              <div className={s.img_wrapper}>
                <img src={imgSrc} className={imgClass} alt="book" />
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

// const BookCard = (props) => {
//   return (
//     <>
//       {props.bookItems.map((e) => {
//         try {
//           let imgSrc =
//             typeof e.volumeInfo.imageLinks.thumbnail !== "undefined"
//               ? e.volumeInfo.imageLinks.thumbnail
//               : "";
//           let authors =
//             typeof e.volumeInfo.authors !== "undefined"
//               ? e.volumeInfo.authors.join(", ")
//               : "";
//           let title =
//             typeof e.volumeInfo.title !== "undefined" ? e.volumeInfo.title : "";
//           let categories =
//             typeof e.volumeInfo.categories[0] !== "undefined"
//               ? e.volumeInfo.categories[0]
//               : "";
//           console.log(imgSrc + "," + authors + "," + title + "," + categories);
//           return (
//             <Link to="/bookinfo" className={s.hover_link}>
//               <div className={s.content_wrapper}>
//                 <div className={s.img_wrapper}>
//                   <img src={imgSrc} className={s.img} alt="" />
//                 </div>
//                 <div className={s.text_wrapper}>
//                   <span className={s.text}>{categories}</span>
//                   <h3 className={s.text}>{title}</h3>
//                   <span className={s.text}>{authors}</span>
//                 </div>
//               </div>
//             </Link>
//           );
//         } catch (err) {
//           console.log(err);
//         }
//       })}
//     </>
//   );
// };
