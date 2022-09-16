import { useEffect, useState } from "react";
import bookingService from "../../services/bookingService/bookingService";
import { NotificationsBlock } from "./notificationBlock";
import classes from "./notifications.module.css";
export const Notifications = (props) => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const loadNotifications = async () => {
      let res = await bookingService.getCarNotifications();
      let data = res.data.data;
      let list = [];
      let id = 1;
      data.forEach((e) => {
        let message = e.message;
        list.push(<NotificationsBlock label={message} id={id++} data={list} />);
      });
      setDataList(list);
    };
    loadNotifications();
  }, []);
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
          {dataList.map((e) => {
            return e;
          })}
        </div>
      </div>
    </div>
  );
};
