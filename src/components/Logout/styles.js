import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(
  () => ({
    layout: {
      display: "flex",
      justifyContent: "right",
      paddingRight: "10px",
    },
    buttonStyle: {
      height: "3em",
      width: "4em",
    },
  }),
  { index: 1 }
);

export { useStyles };
