import { Grid, Typography } from "@mui/material";
import CommonButton from "../common/btn";

export const NotificationsBlock = (props) => {
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
          height: "100%",
          backgroundColor: "#9FDFB9",
          marginTop: "2%",
          borderRadius: "3%",
          boxShadow: "0px 0px 8px 0px black",
        }}
      >
        <Grid
          item
          container
          xs={10}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1">{props.label}</Typography>
        </Grid>
        <Grid
          item
          container
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
            size={"small"}
            label={"clear"}
            style={{
              width: "60%",
              height: "50%",
              marginRight: "3%",
              backgroundColor: "#B3B8B5",
            }}
            onClick={(e) => {
              e.event.target.parentElement.parentNode.parentNode.remove();
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
