import { useStyles } from "./styles";
import _ from "lodash";
import history from "../../routes/history";
import BookMovie from "../../components/BookMovie";
import Header from "../../components/Header";
import { getSessionToken } from "../../utils/session";

const BookingPage = (props) => {
  const classes = useStyles();
  if (_.isEmpty(getSessionToken("session_id")) === true) history.push("/");
  
  return (
    <div>
      <Header></Header>
      <div className={classes.layout}>
        <BookMovie></BookMovie>
      </div>
    </div>
  );
};

export default BookingPage;
