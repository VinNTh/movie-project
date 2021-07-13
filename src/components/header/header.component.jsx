import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import "./header.component.css";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  leftHeader: {
    height: "100%",
  },
  centerHeader: {
    height: "100%",
    width: "50%",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  rightHeader: {
    textAlign: "center",
    height: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sign: {
    // display: "inline-block",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Grid container justifyContent="space-between">
            <Grid
              item
              xs={2}
              alignItems="center"
              className={classes.leftHeader}
            >
              <Grid item xs={12}>
                <NavLink to="/" exact={true}>
                  <Typography color="inherit">
                    <img
                      width="17%"
                      src="./img/web-logo.png"
                      alt="./img/web-logo.png"
                    />
                  </Typography>
                </NavLink>
              </Grid>
            </Grid>
            <Grid className="itemCenter" item xs={8}>
              <Grid
                container
                alignItems="center"
                className={classes.centerHeader}
              >
                <Grid item xs={3}>
                  <Typography>
                    <a href="#">Lịch chiếu</a>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>
                    <a href="#">Cụm rạp</a>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>
                    <a href="#">Tin tức</a>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>
                    <a href="#">Ứng dụng</a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid
                container
                alignItems="center"
                className={classes.rightHeader}
              >
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                  <NavLink className={classes.sign} to="/sign-in">
                    <Typography className="sign signIn">Đăng nhập</Typography>
                  </NavLink>
                </Grid>
                <Grid item xs={5}>
                  <NavLink className={classes.sign} to="/sign-up">
                    <Typography className="sign signUp">Đăng ký</Typography>
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
