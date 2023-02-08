import { useEffect, useState } from "react";
import { useStyles } from "./styles";
import TableOutline from "../TableOutline";
import axios from "axios";
import { getSessionToken } from "../../utils/session";

const BookingsTable = (props) => {
  const { setLoading } = props;
  const classes = useStyles();
  const [tableData, setTableData] = useState();
  const config = {
    headers: {
      session_id: getSessionToken("session_id"),
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/bookings", config)
      .then((data) => {
        const dataTable = [];
        data?.data.map((obj) => {
          let tableDataRow = [
            {
              id: "bookingId",
              value: obj?.bookingId,
            },
            {
              id: "userMailId",
              value: obj?.userMailId,
            },
            {
              id: "movieName",
              value: obj?.movieName,
            },
            {
              id: "timeslot",
              value: obj?.timeSlot,
            },
            {
              id: "venue",
              value: obj?.venue,
            },
          ];
          dataTable.push(tableDataRow);
        });
        setTableData(dataTable);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  const tableHeadings = [
    {
      id: "bookingId",
      header: "BOOKING ID",
    },
    {
      id: "userMailId",
      header: "MAILID",
    },
    {
      id: "movieName",
      header: "MOVIE NAME",
    },
    {
      id: "timeslot",
      header: "TIME SLOT",
    },
    {
      id: "venue",
      header: "VENUE",
    },
  ];

  return (
    <div className={classes.layout}>
      <TableOutline tableHeadings={tableHeadings} tableData={tableData} />
    </div>
  );
};

export default BookingsTable;
