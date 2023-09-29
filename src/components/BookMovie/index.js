import { Box, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import history from "../../routes/history";
import FormikControl from "../../Formik/FormikControl";
import { useStyles } from "./styles.js";
import { getSessionToken } from "../../utils/session";

const BookMovie = (props) => {
  const initialValues = {
    movieName: "",
    date: "",
    timeSlot: "",
    venue: "",
    userMailId: "",
  };
  const validationSchema = Yup.object({
    movieName: Yup.string().required("*required"),
    date: Yup.date().required("*required"),
    timeSlot: Yup.string().required("*required"),
    venue: Yup.string().required("*required"),
    userMailId: Yup.string().required("*required"),
  });

  const reactOnSubmit = (values, formik) => {
    // setLoading(true)
    const url = `http://localhost:8080/booking`;
    const config = {
      headers: { session_id: getSessionToken("session_id") },
    };
    const data = {
      movieName: values.movieName,
      date: values.date,
      timeSlot: values.timeSlot,
      venue: values.venue,
      userMailId: values.userMailId,
    };
    axios
      .post(url, data, config)
      .then(() => {
        formik.resetForm();
        history.push("/home");
      })
      .catch(() => {});
  };

  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={reactOnSubmit}
      >
        {(formik) => (
          <Form className={classes.form}>
            <Box>
              <FormikControl
                control="input"
                type="text"
                label="MOVIE NAME"
                name="movie_name"
                inputlabel="MOVIE NAME"
                onValueChange={(event) => {
                  formik.setFieldValue("movieName", event.target.value);
                }}
                value={formik.values.movieName}
              ></FormikControl>
            </Box>
            <Box>
              <FormikControl
                control="input"
                type="date"
                label="DATE"
                name="date"
                inputlabel=""
                onValueChange={(event) => {
                  formik.setFieldValue("date", event.target.value);
                }}
                value={formik.values.date}
              ></FormikControl>
            </Box>
            <Box>
              <FormikControl
                control="input"
                type="text"
                label="TIME SLOT"
                name="timeSlot"
                inputlabel="TIME SLOT"
                onValueChange={(event) => {
                  formik.setFieldValue("timeSlot", event.target.value);
                }}
                value={formik.values.timeSlot}
              ></FormikControl>
            </Box>
            <Box>
              <FormikControl
                control="input"
                type="text"
                label="VENUE"
                name="venue"
                inputlabel="VENUE"
                onValueChange={(event) => {
                  formik.setFieldValue("venue", event.target.value);
                }}
                value={formik.values.venue}
              ></FormikControl>
            </Box>
            <Box>
              <FormikControl
                control="input"
                type="email"
                label="MAIL ID"
                name="userMailId"
                inputlabel="MAIL ID"
                onValueChange={(event) => {
                  formik.setFieldValue("userMailId", event.target.value);
                }}
                value={formik.values.userMailId}
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
                  height: "100%",
                  width: "100%",
                }}
              >
                SUBMIT
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookMovie;
