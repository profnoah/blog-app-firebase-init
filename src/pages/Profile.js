import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useAuth } from "../context/AuthContextProvider";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 25,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    marginTop: 100,
  },
  image: {
    borderRadius: "50%",
    width: "100px",
  },
});
const Profile = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <div className={classes.mainDiv}>
      <Card className={classes.root}>
        <img
          src={currentUser.photoURL}
          className={classes.image}
          alt="profile"
        />
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Display Name
          </Typography>
          <Typography variant="h5" component="h2">
            {currentUser?.displayName || "Not Found!"}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Email
          </Typography>
          <Typography variant="body2" component="p">
            {currentUser?.email || "Not Found!"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
