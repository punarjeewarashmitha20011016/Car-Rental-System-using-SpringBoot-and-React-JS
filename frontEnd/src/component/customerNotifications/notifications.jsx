import { customerNotificationsArr } from "../../store/customerNotifications";
import { CustomerNotificationsBlock } from "../notifications/customerNotificationBlock";
import classes from "./notifications.module.css";
export const CustomerNotifications = (props) => {
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
        >
          {customerNotificationsArr.map((e) => {
            <CustomerNotificationsBlock label={"Hello There"} data={e} />;
          })}
        </div>
      </div>
    </div>
  );
};
