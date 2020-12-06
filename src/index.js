import store from "./store";
import { updateName, updateMenu } from "./actions";

document
  .getElementById("update")
  .addEventListener("click", () => store.dispatch(updateName("Cemil")));

document
  .getElementById("show")
  .addEventListener("click", () => store.dispatch(updateMenu(true)));
