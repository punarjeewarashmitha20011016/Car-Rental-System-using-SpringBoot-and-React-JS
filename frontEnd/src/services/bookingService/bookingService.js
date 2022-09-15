import { instance } from "../../axios";
class BookingService {
  generateBookingId = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/generateBookingId")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  generatePaymentsId = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/generatePaymentsId")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  placeBooking = async (data) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .post("bookingCarController", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  getAllBookings = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/getAll")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  getCarNotifications = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/getAllNotificationOfAdmin")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
}
export default new BookingService();
