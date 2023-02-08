import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(
  () => ({
    layout: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "1em",
    },
    form: {
      border: "2px solid orange",
      padding: "10em",
    },
    submit: {
      padding: "10em",
      width: "40%",
    },
  }),
  { index: 1 }
);

export { useStyles };
