import { combineReducers } from "redux";
import { movieReducer } from "../reducers/movie.reducer";
import { commonReducer } from "./common.reducer";

export const rootReducer = combineReducers({
    movie: movieReducer,
    common: commonReducer,
})