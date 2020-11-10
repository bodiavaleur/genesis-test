import { TOGGLE_MENU, SET_PRIZE } from "./actions";

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const setPrize = (payload) => ({
  type: SET_PRIZE,
  payload,
});
