const initialState = {
  search: "",
  booksData: [],
  typeOfSort: "relevance",
  category: "all",
  page: 0,
  totalItems: 0,
  updateItemsCount: 30,
  isFetching: false,
};

const booksReducer = (state = initialState, action) => {
  console.log("start reducer");
  console.log("reducer >", action);
  if (action.type === "GET_BOOKS") {
    return {
      ...state,
      search: action.payload.sr,
      booksData: action.payload.data,
      totalItems: action.payload.totalItems,
      page: action.payload.page,
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
  if (action.type === "LOAD_MORE") {
    let newData = [];
    newData.push(...state.booksData);
    if (action.payload.data !== null) {
      newData.push(...action.payload.data);
    }
    return {
      ...state,
      booksData: [...newData],
      page: action.payload.page,
    };
  }
  if (action.type === "IS_FETCHING") {
    return {
      ...state,
      isFetching: action.payload.isFetching,
    };
  }

  return state;
};

export { booksReducer };
