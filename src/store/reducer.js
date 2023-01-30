const initialState = {
  search: "",
  booksData: [],
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

  return state;
};

export { booksReducer };
