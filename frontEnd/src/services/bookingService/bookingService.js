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
  getCarSchedule = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/getCarSchedule")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  getDriverSchedule = async (nic) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/getDriverSchedule?nic=" + nic)
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };

  getCountOfTodayBookings = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/getCountOfTodayBookings")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  getCountOfTodayPendingBookings = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/getCountOfTodayPendingBookings")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  getDailyIncome = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/getDailyIncome")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(undefined);
        });
    });
    return await promise;
  };

  getMonthlyIncome = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/getMonthlyIncome")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(undefined);
        });
    });
    return await promise;
  };
  getAnnualIncome = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarController/getAnnualIncome")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(undefined);
        });
    });
    return await promise;
  };
}

export default new BookingService();
