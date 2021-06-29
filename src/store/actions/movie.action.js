import { GET_MOVIE_DETAIL, GET_MOVIE_LIST } from "../constants/movie.const";
import axios from "axios";
import { startLoadingActions, stopLoadingActions } from "./common.action";

export const getMovieListAction = () => {
  return async (dispatch) => {
    console.log("componentDidMount");
      try{
        const res = await axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
            method: "GET",
            data:null,
        });
        dispatch({
          type: GET_MOVIE_LIST,
          payload: res.data
        })
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
  };
};

export const getMovieDetailAction = (maPhim) => {
  return async (dispatch)=> {
    try{
      dispatch(startLoadingActions())
      const res = await axios({
          url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
          method:"GET",
      })
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: res.data,
      })
      console.log(res.data)
  }catch(err){
      console.log(err)
  }
  dispatch(stopLoadingActions())
  }
}
