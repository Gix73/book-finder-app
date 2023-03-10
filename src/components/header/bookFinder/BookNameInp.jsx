import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./bookFinder.module.css";

async function customFetch(
  search,
  category,
  typeOfSort,
  startInd = 0,
  itemsCount = 30
) {
  if (!search) return false;
  let subj = category !== "all" ? `subject:${category}` : "";

  let answ = await new Promise((resolve, reject) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}+${subj}&orderBy=${typeOfSort}&maxResults=${itemsCount}&startIndex=${startInd}&key=AIzaSyA2lRn9zC1W83xEJLgyJUPNThneLxyGe7M`
    )
      .then((data) => {
        resolve(data.json());
      })
      .catch((err) => reject(err));
  });
  return answ;
}

const BookNameInp = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const sorting = useSelector((state) => state.books);

  async function searchBook(e) {
    if (e.key === "Enter" || e.target.localName === "button") {
      dispatch({
        type: "IS_FETCHING",
        payload: {
          isFetching: true,
        },
      });

      let res = await customFetch(search, sorting.category, sorting.typeOfSort);
      dispatch({
        type: "IS_FETCHING",
        payload: {
          isFetching: false,
        },
      });
      if (res.items === undefined) {
        alert(
          "No books in fetch response. Please, use VPN or try to search another book"
        );
      } else {
        dispatch({
          type: "GET_BOOKS",
          payload: {
            sr: search,
            data: [...res.items],
            page: res.items.length,
            totalItems: res.totalItems,
          },
        });
      }
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
export { customFetch };
