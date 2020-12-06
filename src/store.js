import { createStore } from "redux";
import { UPDATE_NAME, UPDATE_MENU } from "./actions/types";
import handleUpdateView from "./view";

let type = "";

const combineReducers = (reducers) => {
  const keys = Object.keys(reducers);

  return (state, action) => {
    const newState = {};
    type = action.type;

    keys.forEach((key) => {
      const r = reducers[key](state[key], action);
      newState[key] = r;
    });

    return newState;
  };
};

const viewReducer = (state, action) => {
  if (action.type === UPDATE_MENU) {
    return {
      ...state,
      menu: action.value
    };
  }

  return state;
};

const userReducer = (state, action) => {
  if (action.type === UPDATE_NAME) {
    return {
      ...state,
      name: action.value
    };
  }

  return state;
};

const rootReducer = combineReducers({
  user: userReducer,
  view: viewReducer
});

const store = createStore(rootReducer, {
  user: { name: "Erdem" },
  view: { menu: false }
});

store.subscribe(() => handleUpdateView(type, store.getState()));

export default store;
