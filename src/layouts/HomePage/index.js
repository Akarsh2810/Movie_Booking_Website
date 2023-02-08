import { Button } from "@material-ui/core";
import _ from "lodash";
import history from "../../routes/history";
import BookingsTable from "../../components/BookingsTable";
import Header from "../../components/Header";
import { useStyles } from "./styles";
import { getSessionToken } from "../../utils/session";
import Loader from "../../utils/loader";
import { useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(null);

  const classes = useStyles();
  if (_.isEmpty(getSessionToken("session_id")) === true) history.push("/");

  return (
    <div>
      <Loader loading={loading}></Loader>
      <Header></Header>
      <div className={classes.layout}>
        <BookingsTable setLoading={setLoading}></BookingsTable>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ backgroundColor: "#6577B3", height: "3em", width: "5ems" }}
            onClick={() => {
              history.push("/booking");
            }}
          >
            Create Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
