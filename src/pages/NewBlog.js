import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import blogPng from "../assets/blok.png";
import { useHistory } from "react-router-dom";
import { useBlog } from "../contexts/BlogContextProvider";
import { useAuth } from "../contexts/AuthContextProvider";
import { toastSuccessNotify, toastErrorNotify } from "../utils/ToastNotify";
import BlogForm from "../components/BlogForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: theme.spacing(13),
    backgroundColor: "#046582",
  },
  blogImg: {
    width: 200,
  },

  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));

const NewBlog = () => {
  return (
    <div>
      <h2>New Blog</h2>
    </div>
  );
};

export default NewBlog;
