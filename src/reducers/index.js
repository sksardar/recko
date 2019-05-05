import { combineReducers } from "redux";
import grid from "./grid.js";
import entities from "./entities.js";

export default combineReducers({
  grid: grid,
  entities: entities
});