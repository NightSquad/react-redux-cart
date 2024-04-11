import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const register = (name, surname, email, password) => {
  return axios.post(API_URL + "auth/signup", {
    name,
    surname,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "auth/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        // console.log(response.data)
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getAllOrders = () => {
  return axios
    .get(API_URL + "getAllOrders").then((res) => res.data)
}

const createOrder = (vehicle_id) => {
  const user = getCurrentUser()
  return axios
    .post(API_URL + "createOrder", {
      client_id: user.id,
      vehicle_id
    }).then((response) => {
      return response.data
    })
}

const getOrders = () => {
  const user = getCurrentUser()
  return axios
    .post(API_URL + "getOrders", {
      user
    }).then((response) => {
      // console.log(response.data)
      // localStorate.setItem("orders", JSON.stringify(response.data))
    return response.data
    })
}

const updateOrder = (id, status) => {
  return axios
    .post(API_URL + "updateOrder", {
      id,
      status
    }).then((response) => {
      return response.data
    })
}

const getUsers = (users) => {
  return axios
    .post(API_URL + "getUsers", {
      users
    }).then((response) => {
      console.log(response.data)
      return response.data
    })
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  getOrders,
  createOrder,
  getAllOrders,
  updateOrder,
  getUsers
};

export default AuthService;
