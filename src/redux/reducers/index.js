import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/modules/listmoviereducer";
import detailMovieReducer from "./../../containers/HomeTemplate/DetailMoviePage/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "../../containers/AdminTemplate/AddUserPage/modules/reducer";
import getFilmReducer from "containers/AdminTemplate/Film/modules/getfilmreducer";
import addEditFilmReducer from "containers/AdminTemplate/Film/modules/capNhatPhimReducer";
const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer,
  getFilmReducer,
  addEditFilmReducer,
});

export default rootReducer;
