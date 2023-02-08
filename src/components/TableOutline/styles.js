import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    maxHeight: 580,
    marginBottom: "20px",
    borderRadius: 0,
    color: "#4A4A4A",
  },
  heading: {
    color: "#335977;",
    fontSize: "20px",
    marginBottom: "10px",
    marginTop: "10px",
  },
  spacing: {},
  tableHeader: {
    border: "none",
    backgroundColor: "#335977",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.07px",
    fontFamily: "Roboto, sans-serif",
  },
  iconbuttonroot: {
    textAlign: "left",
    fontSize: "14px",
  },
  headerWrapper: {
    color: "#FFE784",
    fontSize: "14px",
    padding: 0,
  },
  paginationWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#4A4A4A",
    fontSize: "14px",
  },
  paginationSelectWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectRoot: {
    width: "50px",
  },
  selectWrapper: {
    margin: "0 10px 0 20px",
  },
  sortIcon: {
    color: "#FFFFFF",
    marginLeft: "2px",
  },
  noPointer: {
    pointerEvents: "none",
  },
  tableHeading: {
    "& span": {
      fontSize: "14px",
    },
  },
  dropDownValues: {
    cursor: "pointer",
    padding: "8px 12px",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#FFF2E6",
    },
  },
  popoverPaper: {
    width: "230px",
  },
  active: {
    backgroundColor: "#D6D1CE",
    margin: "3px",
    borderRadius: "8px",
    color: "#000000",
    fontWeight: "bold",
  },
  infoIcon: {
    fontSize: "14px",
    cursor: "pointer",
  },
  timestampPopover: {
    color: "#4A4A4A",
    fontSize: "14px",
    opacity: "70%",
    textAlign: "left",
  },
  timePopoverPaper: {
    width: "250px",
  },
});

export { useStyles };
