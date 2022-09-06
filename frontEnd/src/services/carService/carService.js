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
}
export default new CarService();
