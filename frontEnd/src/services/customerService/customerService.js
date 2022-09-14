import { instance } from "../../axios";

class CustomerService {
  createPost = async (data) => {
    const headers = {
      "Content-Type": false,
      processData: false,
    };
    console.log("form data: " + data.getAll("nicPhoto").toLocaleString());
    const promise = new Promise((resolve, reject) => {
      instance
        .post("customer", data, {
          headers: headers,
        }) //10s
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
  createPut = async (data) => {
    const headers = {
      "Content-Type": false,
      processData: false,
    };
    console.log("form data: " + data.getAll("nicPhoto").toLocaleString());
    const promise = new Promise((resolve, reject) => {
      instance
        .put("customer", data, {
          headers: headers,
        }) //10s
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
  deleteCustomer = async (nic) => {
    const promise = new Promise((resolve, reject) => {
      instance
        .delete(`customer?nic=${nic}`) //10s
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
  fetchCustomers = async () => {
    const promise = new Promise((resolve, reject) => {
      instance
        .get("customer/getAll") //10s
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

  searchCustomerForLogin = async (userName, password) => {
    const promise = new Promise((resolve, reject) => {
      instance
        .get(
          `customer/loginCheckCustomer?email=${userName}&password=${password}`
        ) //10s
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
  searchCustomerByEmailAndPassword = async (userName, password) => {
    const promise = new Promise((resolve, reject) => {
      instance
        .get(
          `customer/searchCustomerByEmailAndPassword?email=${userName}&password=${password}`
        ) //10s
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
export default new CustomerService();
