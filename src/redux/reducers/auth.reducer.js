import * as types from "../constants/book.constants";
const initialState = {
  books: [],
  loading: false,
  errorMessage: "",
  selectedBook: null,
  readingList: [],
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS_REQUEST:
    case types.GET_SINGLE_BOOK_REQUEST:
    case types.GET_READING_LIST_REQUEST:
      return { ...state, loading: true, errorMessage: "" };
    default:
      return state;
  }
};

export default authReducer;
