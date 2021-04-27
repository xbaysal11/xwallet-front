import { urls, toastOption } from "../../config";
import { API } from "../../utils";
import QS from "query-string";
import { toast } from "react-toastify";
import {
  GET_WALLETS_REQUEST,
  GET_WALLETS_SUCCESS,
  GET_WALLETS_ERROR,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../actionTypes";

export const getWallets = ({ filters = {} } = {}) => async (dispatch) => {
  const qs = QS.stringify(filters);

  dispatch(getWalletsRequest());
  return await API.get(`${urls.WALLETS}/?${qs}`)
    .then((res) => {
      console.log(res);
      dispatch(getWalletsSuccess(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      dispatch(getWalletsFailure(error));
      return error;
    });
};

export const createWallet = (values) => async (dispatch) => {
  dispatch(getWalletsRequest());

  let data = {
    name: values.name,
    type: values.type,
    balance: values.balance,
  };
  return await API.post(`${urls.WALLETS}`, data)
    .then((res) => {
      console.log(res.data);
      if (res.status === 400) {
        toast.error(res.data, toastOption);
      }
      toast.success("Successfully added !", toastOption);
      dispatch(getWalletsSuccess(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      if (error.response.status === 400) {
        for (var key in error.response.data) {
          toast.error(`${error.response.data[key]}`, toastOption);
        }
      } else {
        toast.error("Error when adding !", toastOption);
      }
      dispatch(getWalletsFailure(error));
      return error;
    });
};

export const deleteWallet = (id) => async () => {
  return await API.delete(`${urls.WALLETS}/${id}/`)
    .then((res) => {
      console.log(res.data);
      toast.success("Successfully deleted !", toastOption);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error during deletion!", toastOption);
      return error;
    });
};

export const getWalletById = (id) => async (dispatch) => {
  dispatch(getCategoryRequest());
  return await API.get(`${urls.WALLETS}/${id}/`)

    .then((res) => {
      dispatch(getCategorySuccess(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      dispatch(getCategorySuccess(error));
      return error;
    });
};

export const updateWallet = (values, id) => async () => {
  let data = {
    name: values.name,
    balance: values.balance,
  };

  return await API.put(`${urls.WALLETS}/${id}/`, data)
    .then((res) => {
      console.log(res.data);
      toast.success("Saved successfully !", toastOption);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error when saving !", toastOption);
      return error;
    });
};

export const getWalletsRequest = () => {
  return {
    type: GET_WALLETS_REQUEST,
  };
};

export const getWalletsSuccess = (data) => {
  return {
    type: GET_WALLETS_SUCCESS,
    payload: data,
  };
};

export const getWalletsFailure = (error) => {
  return {
    type: GET_WALLETS_ERROR,
    payload: error,
  };
};

export const getCategoryRequest = () => {
  return {
    type: GET_CATEGORY_REQUEST,
  };
};

export const getCategorySuccess = (data) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const getCategoryFailure = (error) => {
  return {
    type: GET_CATEGORY_ERROR,
    payload: error,
  };
};
