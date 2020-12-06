import { UPDATE_NAME, UPDATE_MENU } from "./actions/types";

const updateMenu = (state) => {
  console.log("updateMenu", state.view.menu);
  document.getElementById("menu").style.display = state.view.menu
    ? "block"
    : "none";
};

const updateText = (state) => {
  document.getElementById("target").innerText = state.user.name;
};

const viewBus = {
  [UPDATE_NAME]: updateText,
  [UPDATE_MENU]: updateMenu
};

const handleUpdateView = (type, state) => viewBus[type](state);

export default handleUpdateView;
