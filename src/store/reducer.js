const initialState = {
  search: "",
  booksData: [],
  typeOfSort: "relevance",
  category: "all",
};

const booksReducer = (state = initialState, action) => {
  console.log("start reducer");
  console.log("reducer >", action);
  if (action.type === "GET_BOOKS") {
    return {
      ...state,
      search: action.payload.sr,
      booksData: action.payload.data,
    };
  }
  if (action.type === "CHANGE_SORT") {
    return {
      ...state,
      category: action.payload.category ? action.payload.category : "all",
      typeOfSort: action.payload.sortType
        ? action.payload.sortType
        : "relevance",
    };
  }

  return state;
};

export { booksReducer };
