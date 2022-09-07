import { Grid, TextField } from "@mui/material";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";

export const ViewCurrentBookings = (props) => {
  return (
    <Grid container spacing={0} style={{ width: "95%", height: "95%" }}>
      <Grid container item xs={12} style={{ height: "20%" }}>
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
        <CommonTable
          tblRows={[
            "Row No",
            "Booking Id",
            "Customer Nic",
            "Booked Date",
            "Booked Time",
            "Cost",
          ]}
          dataList={[]}
          style={{ width: "90%", height: "90%", display: "flex" }}
        />
      </Grid>
    </Grid>
  );
};
