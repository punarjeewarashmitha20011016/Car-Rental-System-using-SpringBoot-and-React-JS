import { instance } from "../../axios";

class AdminService {
  fetchAdmins = async () => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get("admin/getAll")
        .then((res) => {
          return resolve(res);
        })
        .catch((res) => {
          return resolve(res);
        });
    });
    return await promise;
  };

  searchAdmins = async (userName, password) => {
    let promise = new Promise((resolve, reject) => {
      instance
        .get(
          "admin/loginCheckAdmin?email=" + userName + "&password=" + password
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
export default new AdminService();
