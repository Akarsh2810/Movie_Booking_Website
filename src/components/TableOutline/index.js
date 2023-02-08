import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useStyles } from "./styles";

export default function TableOutline(props) {
  const classes = useStyles();
  const { tableData, tableHeadings } = props;

  return (
    <Grid className={classes.spacing} container>
      <TableContainer className={classes.table} component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {tableHeadings.map((obj, index) => {
                return (
                  <TableCell
                    key={index}
                    className={ `${classes.tableHeader} ${obj.className ? obj.className : ""}` }
                  >
                    {obj.header}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                {row.map((obj, index) => {
                  return (
                    <TableCell key={index} className={obj.className}>
                      <Typography style={{ color: "#4A4A4A" }}>
                        {obj.value}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

TableOutline.defaultProps = {
  tableData: [],
  tableHeadings: [],
};
