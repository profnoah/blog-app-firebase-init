import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    padding: theme.spacing(13),
    backgroundColor: "#046582",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0),
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#046582",
    },
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));

const BlogForm = (props) => {
  const { blog, handler } = props;
  const classes = useStyles();
  const [newBlog, setNewBlog] = useState(blog);

  useEffect(() => {
    setNewBlog(blog);
  }, [blog]);

  return (
    <form className={classes.form} onSubmit={() => handler(newBlog)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            required
            id="title"
            label="Title"
            name="title"
            value={newBlog.title}
            autoFocus
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="image"
            label="Image URL"
            type="text"
            id="image"
            value={newBlog.image}
            onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Content"
            name="content"
            multiline
            required
            value={newBlog.content}
            onChange={(e) =>
              setNewBlog({ ...newBlog, content: e.target.value })
            }
            fullWidth
            rows={15}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.submit}
      >
        Submit
      </Button>
    </form>
  );
};

export default BlogForm;
