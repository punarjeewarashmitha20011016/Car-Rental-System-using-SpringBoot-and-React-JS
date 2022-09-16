import { instance } from "../../axios";

class CarService {
  fetchCars = async () => {
    const promise = new Promise((resolve, reject) => {
      instance
        .get("car/getAll") //10s
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          console.log("error: " + er);
          return resolve(er);
        });
    });
    return await promise;
  };

  postCar = async (formData) => {
    console.log("form Data = ", formData.getAll("dto"));
    console.log("form Data = ", formData);
    const promise = new Promise((resolve, reject) => {
      instance
        .post("car", formData, {
          headers: {
            ContentType: false,
            ProcessData: false,
          },
        })
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          console.log("error: " + er);
          return resolve(er);
        });
    });
    return await promise;
  };

  putCar = async (formData) => {
    const promise = new Promise((resolve, reject) => {
      instance
        .put("car", formData, {
          ContentType: false,
          ProcessData: false,
        })
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  deleteCar = async (id) => {
    const promise = new Promise((resolve, reject) => {
      instance
        .delete("car?regNo=" + id)
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return resolve(err);
        });
    });
    return await promise;
  };

  searchCar = async (id) => {
    const promise = new Promise((resolve, reject) => {
      instance
        .get("bookingCarRequestController/searchCarsInBooking?regNo=" + id)
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return resolve(err);
        });
    });
    return await promise;
  };
  countAllCarsUnderAndNeedMaintenance = async () => {
    const promise = new Promise((resolve, reject) => {
      instance
        .get("car/countAllCarsUnderAndNeedMaintenance")
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return resolve(err);
        });
    });
    return await promise;
  };
  countAllCars = async () => {
    const promise = new Promise((resolve, reject) => {
      instance
        .get("car/countAllCars")
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return resolve(err);
        });
    });
    return await promise;
  };
}
export default new CarService();
