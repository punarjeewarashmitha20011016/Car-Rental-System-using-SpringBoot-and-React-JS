import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import placeBookingRequest from "../../services/placeBookingRequest/placeBookingRequest";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";
import { ViewCurrentBookingDetailsTable } from "./viewCurrentBookingDetailsTbl";

export const ViewCurrentBookings = (props) => {
  const [check, setCheck] = useState(false);
  const [view, setView] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [searchTxt, setSearchTxt] = useState(null);
  const setDataToDetailsTable = (list) => {
    console.log(list);
    let arr = [];
    let rowNo = 1;
    list != null &&
      list.forEach((data) => {
        arr.push(
          <tr>
            <td>{rowNo++}</td>
            <td>{data.bookingId}</td>
            <td>{data.car_RegNo}</td>
            <td>{data.driverNic}</td>
            <td>{data.carType}</td>
            <td>{data.rentalType}</td>
            <td>{data.dateOfPickup}</td>
            <td>{data.timeOfPickup}</td>
            <td>{data.pickupVenue}</td>
            <td>{data.returnedDate}</td>
            <td>{data.returnedTime}</td>
            <td>{data.returnedVenue}</td>
            <td>{data.lossDamage}</td>
            <td>{data.cost}</td>
          </tr>
        );
      });
    setDataList(arr);
  };
  return (
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
      <Grid container item xs={12} style={{ height: "20%", display: "flex" }}>
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
              let res =
                await placeBookingRequest.placeBookingRequestGetAllPendingBookings();
              let data = res.data.data;
              data.forEach((e) => {
                if (searchTxt === e.boId) {
                  setDataToDetailsTable(e.bookingDetails);
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
                <ViewCurrentBookingDetailsTable
                  dataListForDetailsTbl={dataList}
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
            tblRows={[
              "Row No",
              "Booking Id",
              "Customer Nic",
              "Booked Date",
              "Booked Time",
              "Cost",
            ]}
            dataList={props.dataList}
            style={{ width: "90%", height: "90%", display: "flex" }}
          />
        ) : (
          view
        )}
      </Grid>
    </Grid>
  );
};
