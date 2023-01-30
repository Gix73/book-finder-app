import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducer";

export default configureStore({
  reducer: { books: booksReducer },
});
