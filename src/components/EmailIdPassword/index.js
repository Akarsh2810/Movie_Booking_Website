import { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import * as Yup from "yup";
import history from "../../routes/history";
import FormikControl from "../../Formik/FormikControl";
import { useStyles } from "./styles.js";
import { setSessionToken } from "../../utils/session";

function Alert(props) {
  return <MuiAlert elevation={24} variant="standard" {...props} />;
}
const EmailIdPassword = (props) => {
  const { setLoading } = props;
  const [validated, setValidated] = useState(true);
  const [openBodySnackBar, setOpenBodySnackBar] = useState(false);
  const initialValues = {
    emailId: "",
    password: "",
  };
  const validationSchema = Yup.object({
    emailId: Yup.string().required("*required"),
    password: Yup.string().required("*required"),
  });
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  const handleBodySnackBarClose = () => {
    setOpenBodySnackBar(false);
  };
  const reactOnSubmit = (values, formik) => {
    setLoading(true);
    const url = `http://localhost:8080/user/login`;
    const data = {
      userMailId: values.emailId,
      password: values.password,
    };
    axios
      .post(url, data, config)
      .then((data) => {
        console.log("data", data);
        formik.resetForm();
        setOpenBodySnackBar(true);
        setLoading(false);
        const user = data;
        setSessionToken("session_id", user?.data?.session_id);
        history.push("/home");
      })
      .catch((error) => {
        setOpenBodySnackBar(true);
        setValidated(false);
        setLoading(false);
      });
  };

  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={reactOnSubmit}
      >
        {(formik) => (
          <Form className={classes.layout}>
            {openBodySnackBar ? (
              validated ? (
                <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  open={openBodySnackBar}
                  onClose={handleBodySnackBarClose}
                  // eslint-disable-next-line no-useless-concat
                  key={"top" + "center"}
                >
                  <Alert onClose={handleBodySnackBarClose} severity="success">
                    Logged In successfully!
                  </Alert>
                </Snackbar>
              ) : (
                <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  open={openBodySnackBar}
                  onClose={handleBodySnackBarClose}
                  // eslint-disable-next-line no-useless-concat
                  key={"top" + "center"}
                >
                  <Alert onClose={handleBodySnackBarClose} severity="error">
                    Entered Email ID or Password is incorrect
                  </Alert>
                </Snackbar>
              )
            ) : null}
            <Box>
              <FormikControl
                control="input"
                type="email"
                label="EMAIL ID"
                name="emailId"
                inputlabel="Email"
                onValueChange={(event) => {
                  formik.setFieldValue("emailId", event.target.value);
                }}
                value={formik.values.emailId}
              ></FormikControl>
            </Box>
            <Box>
              <FormikControl
                control="input"
                type="password"
                label="PASSWORD"
                name="password"
                inputlabel="Password"
                onValueChange={(event) => {
                  formik.setFieldValue("password", event.target.value);
                }}
                value={formik.values.password}
              ></FormikControl>
            </Box>

            <Box className={classes.submit}>
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  padding: "0.7em",
                  height: "100%",
                  width: "60%",
                }}
              >
                LOGIN
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EmailIdPassword;
