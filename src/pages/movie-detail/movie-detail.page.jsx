import React, { Component } from 'react';
import axios from "axios"
import { CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { getMovieDetailAction } from '../../store/actions/movie.action';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import './loading.css';
import ShowTime from '../../components/show-time/show-time.component';

class MovieDetail extends Component {
    render() {
        if(this.props.loading){
            return(
                <div className="loader">Loading...</div>
            )
        }
        return (
            <div>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={4} md={3}>
                            <CardMedia component="img" image={this.props.movieDetail.hinhAnh}>
                            </CardMedia>
                        </Grid>
                        <Grid item lg={8}>
                            <Typography variant="h4">
                                Tên phim: {this.props.movieDetail.tenPhim}
                            </Typography>
                            <Typography>
                                Mô tả: {this.props.movieDetail.moTa}
                            </Typography>
                        </Grid>
                    </Grid>
                    <section>
                            <ShowTime/>
                    </section>
                </Container>
            </div>
        );
    }
    async componentDidMount(){
        const {movieCode} = this.props.match.params;
        this.props.dispatch(getMovieDetailAction(movieCode))
    }
}
const mapStateToProps = (state)=>{
    return{
        movieDetail: state.movie.movieDetail,
        loading: state.common.loading,
    }
}

export default connect(mapStateToProps,null)(withRouter(MovieDetail));