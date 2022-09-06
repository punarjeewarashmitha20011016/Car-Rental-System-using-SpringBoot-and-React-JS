import { Grid, Typography } from "@mui/material";

export const IncomeCards = (props) => {
  return (
    <Grid
      item
      container
      xs={10}
      style={{
        height: "90%",
        boxShadow: "0px 0px 10px 0px black",
        display: "flex",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          height: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid black",
        }}
      >
        <Typography style={{ display: "flex" }}>{props.header}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          height: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" style={{ display: "flex" }}>
          {props.incomeValue}
        </Typography>
      </Grid>
    </Grid>
  );
};
