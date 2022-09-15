import { NotificationsBlock } from "../notifications/notificationBlock";
import PlaceBookingRequestService from "../../services/placeBookingRequest/placeBookingRequest";
import classes from "./notifications.module.css";
import { cusNicStore } from "../../store/cusNicStore";
import { useState } from "react";
import { useEffect } from "react";
export const CustomerNotifications = (props) => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const loadNotifications = async () => {
      let res =
        await PlaceBookingRequestService.placeBookingRequestGetAllPendingBookings();
      let data = res.data.data;
      let list = [];
      let id = 1;
      data.forEach((e) => {
        if (e.cusNic === cusNicStore.cusNic) {
          let message =
            e.boId +
            " Id Request is Successfully Accepted. Please Come on pickup date to borrow your rental car.";
          list.push(
            <NotificationsBlock label={message} id={id++} data={list} />
          );
        }
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
