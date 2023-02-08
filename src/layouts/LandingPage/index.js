import { useState } from "react";
import { useStyles } from "./styles";
import Login from "../../components/Login";
import Loader from "../../utils/loader";
import BookMyShowImage from "../../components/BookMyShowImage";

const LandingPage = () => {
  const [loading, setLoading] = useState(null);
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Loader loading={loading}></Loader>
      <BookMyShowImage></BookMyShowImage>
      <Login setLoading={setLoading}></Login>
    </div>
  );
};

export default LandingPage;
