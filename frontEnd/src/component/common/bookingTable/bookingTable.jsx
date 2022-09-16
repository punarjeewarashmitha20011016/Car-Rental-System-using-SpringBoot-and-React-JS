import { Grid, TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import CommonButton from "../btn";
import CommonTable from "../table/table";
import classes from "./bookingTable.module.css";
import { BookingDetailsTable } from "../bookingDetailsTable/bookingDetailsTable";
export const BookingTable = (props) => {
  const [check, setCheck] = useState(false);
  const [view, setView] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [searchTxt, setSearchTxt] = useState(null);
  const [dataListOfDetailsTable, setDataToDetailsTable] = useState([]);
  useEffect(() => {
    const getAllBookings = async () => {
      let res = props.resData.data;
      setDataList(res);
    };
    getAllBookings();
  }, []);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container} style={props.style}>
        <Grid
          container
          spacing={0}
          style={{
            width: "95%",
            height: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            item
            xs={12}
            style={{ height: "20%", display: "flex" }}
          >
            <Grid
              item
              xs={7}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                size={"small"}
                style={{ width: "85%", display: "flex" }}
                placeholder={"Search Current Booking Details"}
                onChange={(e) => {
                  setSearchTxt(e.target.value);
                }}
                value={searchTxt}
              />
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                color={"primary"}
                label={"Search"}
                style={{ width: "80%" }}
                onClick={async () => {
                  let data = props.resData.resData;
                  data.forEach((e) => {
                    if (searchTxt === e.boId) {
                      let arr = [];
                      let rowNo = 1;
                      e.bookingDetails.length != 0 &&
                        e.bookingDetails.forEach((details) => {
                          props.setDetailsRows(rowNo, details);
                          arr.push(props.setDetailsRowsToTable);
                        });
                      setDataToDetailsTable(arr);
                    }
                  });
                }}
              />
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                color={"success"}
                label={"View Booking Details"}
                style={{ width: "80%" }}
                onClick={(e) => {
                  setCheck(true);
                  setView(
                    <BookingDetailsTable
                      dataList={dataListOfDetailsTable}
                      tblRows={props.tblRowsForDetailsTable}
                    />
                  );
                }}
                onDblClick={(e) => {
                  setCheck(false);
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            style={{
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {check === false ? (
              <CommonTable
                tblRows={props.tblRows}
                dataList={dataList}
                style={{ width: "90%", height: "90%", display: "flex" }}
              />
            ) : (
              view
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
