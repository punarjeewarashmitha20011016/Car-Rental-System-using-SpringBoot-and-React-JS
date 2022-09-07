import { Grid } from "@mui/material";
import CommonTable from "../common/table/table";

export const BookingRequestInAdminDetails = (props) => {
  return (
    <Grid
      container
      spacing={0}
      style={{ position: "relative", width: "90%", height: "90%" }}
    >
      <Grid item xs={12} style={{ height: "100%" }}>
        <CommonTable
          style={{ width: "100%", height: "90%" }}
          tblRows={[
            "Row No",
            "Booking Id",
            "Car Reg No",
            "Driver Nic",
            "Car Type",
            "Rental Type",
            "Date of Pickup",
            "Time Of Pickup",
            "Pickup Venue",
            "Return Date",
            "Return Time",
            "Return Venue",
            "Loss Damage",
            "Cost",
          ]}
          dataList={[]}
        />
      </Grid>
    </Grid>
  );
};
