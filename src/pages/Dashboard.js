import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BlogCard from "../components/BlogCard";
import { useBlog } from "../context/BlogContextProvider";
import Typography from "@material-ui/core/Typography";
import loadingGif from "../assets/loading.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(5),
    },
  },

  title: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  mainRoot: {
    marginTop: 70,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const { currentBlogs } = useBlog();

  return (
    <div className={classes.mainRoot}>
      <Typography className={classes.title} variant="h3" noWrap>
        ──── Dashboard ────
      </Typography>
      <>
        <Grid container className={classes.root} justifyContent="center">
          <Grid item xs={12} >
            <Grid container justifyContent="center" spacing={5}>
              {currentBlogs === undefined ? (
                <img src={loadingGif} alt="loading" />
              ) : currentBlogs ? (
                currentBlogs.map((item, id) => (
                  <Grid key={id} item>
                    <BlogCard item={item} />
                  </Grid>
                ))
              ) : (
                <h3>No data available.</h3>
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default Dashboard;
