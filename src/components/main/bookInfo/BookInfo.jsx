import s from "./BookInfo.module.css";

const BookInfo = () => {
  return (
    <div className={s.container}>
      <div className={s.img_wrapper}>
        <div className={s.img}></div>
      </div>
      <div className={s.info_wrapper}>
        <div className={s.about_wrapper}>
          <span>Art/ General</span>
          <h3>J. S. Bach The Glodberg Variations in Open Score</h3>
          <span>Kendail Durelle Briggs</span>
        </div>
        <div className={s.text_wrapper}>
          <textarea
            className={s.textarea}
            name=""
            id=""
            cols="70"
            rows="10"
            readOnly={true}
          >
            An Open score edition of Bach's Goldberg Variations
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
