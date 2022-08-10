import axios from "axios"
const url = 'https://tes-fs.herokuapp.com'

export const login = (data) => {
  return () => {
    return axios.post(`${url}/users/login`, {
      email: data.email,
      password: data.password
    })
  }
}

export const register = (data) => {
  // console.log(data, '<<<< data');
  return () => {
    return axios.post(`${url}/users/register`, {
      email: data.email,
      username: data.username,
      password: data.password,
      fullName: data.fullName,
      phone: data.phone
    })
  }
}

export const fetchUsers = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/data?page=${page}`)
      // console.log(response.data.rows, '<<< response.data');
      dispatch(userFetchSuccess(response.data.rows))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchUserById = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/userById`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      // console.log(response.data, '<<< response.data user by id');
      dispatch(userByIdFetchSuccess(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchDataById = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/user/data`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      // console.log(response.data, '<<< response.data ID');
      dispatch(dataByIdFetchSuccess(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const inventory = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/inventory`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      // console.log(response.data, '<<< response.data inventory');
      dispatch(inventoryFetchSuccess(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const buyWeapon = (id) => {
  // console.log(id, '<<< id');
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/buy/${id}`, {}, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      // console.log(response.data, '<<< response.data buyWeapon');
      dispatch(inventory())
      dispatch(fetchDataById())
    } catch (error) {
      console.log(error)
    }
  }
}

export const sellWeapon = (id) => {
  // console.log(id, '<<< id');
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${url}/sell/${id}`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      // console.log(response.data, '<<< response.data sellWeapon');
      dispatch(inventory())
      dispatch(fetchDataById())
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchWeapons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/weapons`)
      // console.log(response.data, '<<< response.data weapons');
      dispatch(weaponsFetchSuccess(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateProfiles = (data) => {
  // console.log(data, '<<< data');
  return async (dispatch) => {
    try {
      const response = await axios.put(`${url}/users`, {
        email: data.email,
        username: data.username,
        fullName: data.fullName,
        phone: data.phone,
        avatar: data.avatar
      }, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      // console.log(response.data, '<<< response.data updateProfiles');
      dispatch(fetchDataById())
    } catch (error) {
      console.log(error)
    }
  }
}

export const updatePassword = (data) => {
  console.log(data.password, '<<< password');
  return async () => {
    try {
      const response = await axios.patch(`${url}/users`, {
        password: data.password
      }, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      console.log(response.data, '<<< response.data updatePassword');
    } catch (error) {
      console.log(error)
    }
  }
}

export const forgetPassword = (data) => {
  console.log(data, '<<< data');
  return async () => {
    try {
      const response = await axios.patch(`${url}/forgetPassword`, {
        email: data.email,
        password: data.password
      })
      console.log(response.data, '<<< response.data forgetPassword');
    } catch (error) {
      console.log(error)
    }
  }
}

export const userFetchSuccess = (payload) => {
  return {
    type: 'users/fetchSuccess',
    payload
  }
}

export const userByIdFetchSuccess = (payload) => {
  return {
    type: 'user/fetchSuccess',
    payload
  }
}

export const dataByIdFetchSuccess = (payload) => {
  return {
    type: 'dataById/fetchSuccess',
    payload
  }
}

export const weaponsFetchSuccess = (payload) => {
  return {
    type: 'weapons/fetchSuccess',
    payload
  }
}

export const inventoryFetchSuccess = (payload) => {
  return {
    type: 'inventory/fetchSuccess',
    payload
  }
}