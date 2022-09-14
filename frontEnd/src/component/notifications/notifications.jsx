import classes from "./notifications.module.css";
export const Notifications = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div
          style={{
            width: "90%",
            height: "90%",
            overflowY: "scroll",
            display: "relative",
            display: "flex",
          }}
        ></div>
      </div>
    </div>
  );
};
