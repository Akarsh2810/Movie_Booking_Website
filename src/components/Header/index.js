import Logout from "../Logout";
import { useStyles } from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Logout></Logout>
    </div>
  );
};

export default Header;
