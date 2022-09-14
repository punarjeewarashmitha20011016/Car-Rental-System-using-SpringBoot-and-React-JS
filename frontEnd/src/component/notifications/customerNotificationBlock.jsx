import { Grid, Typography } from "@mui/material";
import CommonButton from "../common/btn";

export const CustomerNotificationsBlock = (props) => {
  return (
    <Grid
      container
      spacing={0}
      style={{
        width: "100%",
        height: "15%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        container
        xs={11}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#9FDFB9",
          marginTop: "2%",
          borderRadius: "3%",
          boxShadow: "0px 10px 5px 0px #9FDFB9",
        }}
      >
        <Grid
          item
          container
          xs={12}
          style={{
            height: "70%",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">{props.data.message}</Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          style={{
            height: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <CommonButton
            variant={"contained"}
            size={"small"}
            label={"clear"}
            style={{
              height: "100%",
              marginRight: "3%",
              backgroundColor: "#B3B8B5",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
