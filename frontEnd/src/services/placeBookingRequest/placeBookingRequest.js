import React from "react";
import { instance } from "../../axios";
class PlaceBookingRequestService {
  getAvailableDriver = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarRequestController/checkAvailableDriver")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  placeBookingRequest = async (data) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .post("bookingCarRequestController/placeBookingRequest", data, {
          headers: {
            ContentType: false,
            ProcessData: false,
          },
        })
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };

  placeBookingRequestGetAll = async (data) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarRequestController/getAll")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  placeBookingRequestGetAllPendingBookings = async (data) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarRequestController/getAllPendingBookings")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };

  placeBookingRequestSearch = async (id) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarRequestController/search?boId=" + id)
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };

  placeBookingRequestAccept = async (data) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .post("bookingCarRequestController/pendingBookingRequestSave", data, {
          headers: {
            ContentType: false,
            ProcessData: false,
          },
        })
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  getCustomerOwnBookings = async (data) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarRequestController/getCustomerOwnBookings?nic=" + data)
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

export default new PlaceBookingRequestService();
