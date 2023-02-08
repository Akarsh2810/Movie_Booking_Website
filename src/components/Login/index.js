import { Paper, Typography } from "@material-ui/core";
import EmailIdPassword from "../EmailIdPassword";
import { useStyles } from "./styles";

const Login = (props) => {
  const { setLoading } = props;
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Paper className={classes.signin}>
        <div className={classes.signintext}>
          {" "}
          <Typography className={classes.root}>LOGIN</Typography>
        </div>
        <EmailIdPassword setLoading={setLoading}></EmailIdPassword>
      </Paper>
    </div>
  );
};

export default Login;
