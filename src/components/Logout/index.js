import { Button } from "@material-ui/core";
import axios from "axios";
import { getSessionToken, removeSessionToken } from "../../utils/session";
import history from "../../routes/history";
import { useStyles } from "./styles";
const Logout = (props) => {
  const classes = useStyles();
  const logout = () => {
    const config = {
      headers: {
        session_id: getSessionToken("session_id"),
      },
    };
    axios
      .post(`http://localhost:8080/user/logout`, null, config)
      .then((data) => {
        removeSessionToken("session_id");
        history.push("/");
      })
      .catch((error) => {});
  };
  return (
    <div className={classes.layout}>
      <Button className={classes.buttonStyle} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
