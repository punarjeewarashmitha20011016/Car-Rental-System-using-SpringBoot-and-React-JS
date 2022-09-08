import { instance } from "../../axios";

class DriverService {
  postDriver = async (formData) => {
    const promise = new Promise((resolve, reject) => {
      instance
        .post("driver", formData, {
          ContentType: false,
          ProcessData: false,
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

  putDriver = async (formData) => {
    const promise = new Promise((resolve, reject) => {
      instance
        .put("driver", formData, {
          ContentType: false,
          ProcessData: false,
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

  deleteDriver = async (nic) => {
    const promise = new Promise((resolve, reject) => {
      instance
        .delete("driver?nic=" + nic)
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };
  fetchDrivers = async () => {
    const promise = new Promise((resolve, reject) => {
      instance
        .get("driver/getAll")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };

  searchDrivers = async (userName, password) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get(
          "driver/loginCheckDriver?email=" + userName + "&password=" + password
        )
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
export default new DriverService();
