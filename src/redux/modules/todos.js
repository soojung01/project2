import { nanoid } from "nanoid";

const ADD_CARD = "ADD_CARD";
const DEL_CARD = "DEL_CARD";
const STAT_CARD = "STAT_CARD";
const FIND_ID = "FIND_ID";

export const addCard = (payload) => {
  return {
    type: ADD_CARD,
    payload,
  };
};

export const delCard = (payload) => {
  return {
    type: DEL_CARD,
    payload,
  };
};

export const statCard = (payload) => {
  return {
    type: STAT_CARD,
    payload,
  };
};

export const findId = (payload) => {
  return {
    type: FIND_ID,
    payload,
  };
};

const initialState = {
  todos: [
    {
      id: nanoid(),
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      done: false,
    },
    {
      id: nanoid(),
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      done: true,
    },
  ],
  todo: { id: 0, title: "", contents: "", done: false },
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return { ...state, todos: [...state.todos, action.payload] };
    case DEL_CARD:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case STAT_CARD:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload
            ? { ...item, done: !item.done }
            : { ...item }
        ),
      };
    case FIND_ID:
      return {
        ...state,
        todo: state.todos.find((item) => {
          return item.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
