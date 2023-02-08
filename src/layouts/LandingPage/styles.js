import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(
  () => ({
    layout: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "left-align",
    },
  }),
  { index: 1 }
);

export { useStyles };
