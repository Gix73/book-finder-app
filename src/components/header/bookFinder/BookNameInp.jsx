import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./bookFinder.module.css";

const BookNameInp = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  async function customFetch() {
    let answ = await new Promise((resolve, reject) => {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA2lRn9zC1W83xEJLgyJUPNThneLxyGe7M`
      )
        .then((data) => {
          resolve(data.json());
        })
        .catch((err) => console.log(err));
    });
    return answ;
  }

  async function searchBook(e) {
    if (e.key === "Enter") {
      let res = await customFetch();
      dispatch({
        type: "GET_BOOKS",
        payload: {
          sr: search,
          data: [res.items],
        },
      });
    }
  }

  return (
    <div className={s.finder_container}>
      <div className={s.name_input_wrappepr}>
        <input
          className={s.name_input}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchBook}
        />
        <button
          className={s.button_img}
          onClick={(e) => searchBook(e)}
        ></button>
      </div>
    </div>
  );
};

export default BookNameInp;
