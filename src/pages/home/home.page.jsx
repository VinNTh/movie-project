import { Button,Container,Grid } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { style } from "./home.style";
import  axios  from "axios";
import { connect } from "react-redux";
import { getMovieListAction } from "../../store/actions/movie.action";
import MovieCard from "../../components/movie-card/movie-card.component";


class Home extends Component {
  renderMovieList(){
    const {movieList} = this.props;
    return movieList.map((movie,index)=>{
      return (
        <Grid item lg={3} md={6} xs={12} key={index}>
          <MovieCard movie={movie}/>
        </Grid>
      )
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button className={classes.myBtn}>Created button with myself</Button> */}
        <Container maxWidth={"lg"}>
            <Grid container>
                {this.renderMovieList()}
            </Grid>
        </Container>
      </div>
    );
  }
  componentDidMount() {
      this.props.dispatch(getMovieListAction());
    }
    // axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    //   data: null,
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
}
const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  }
}

export default connect(mapStateToProps,null)(withStyles(style)(Home)) ;
