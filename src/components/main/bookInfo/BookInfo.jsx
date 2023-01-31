import { useLocation } from "react-router-dom";
import s from "./BookInfo.module.css";

const BookInfo = () => {
  let data = useLocation();
  console.log(data);
  return (
    <div className={s.container}>
      <div className={s.img_wrapper}>
        <div
          className={s.img}
          style={{ backgroundImage: `url(${data.state.imgSrc})` }}
        ></div>
      </div>
      <div className={s.info_wrapper}>
        <div className={s.about_wrapper}>
          <span>{data.state.categories}</span>
          <h3>{data.state.title}</h3>
          <span>{data.state.authors}</span>
        </div>
        <div className={s.text_wrapper}>
          <textarea
            className={s.textarea}
            name=""
            id=""
            cols="70"
            rows="10"
            value={data.state.description}
            readOnly={true}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
