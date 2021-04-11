import { urls, toastOption } from "../../config";
import { API } from "../../utils";
import QS from "query-string";
import { toast } from "react-toastify";
import {
  GET_MONEY_OPERATIONS_REQUEST,
  GET_MONEY_OPERATIONS_SUCCESS,
  GET_MONEY_OPERATIONS_ERROR,
  GET_MONEY_OPERATION_REQUEST,
  GET_MONEY_OPERATION_SUCCESS,
  GET_MONEY_OPERATION_ERROR,
} from "../actionTypes";

export const getMoneyOperations = ({ filters = {} } = {}) => async (
  dispatch
) => {
  const qs = QS.stringify(filters);

  dispatch(getMoneyOperationsRequest());
  return API.get(`${urls.MONEY_OPERATION}/?${qs}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getMoneyOperationsSuccess(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      dispatch(getMoneyOperationsFailure(error));
      return error;
    });
};

export const createMoneyOperation = (values) => async () => {
  let data;
  if (values.type === 3) {
    data = {
      comment: values.comment,
      amount: values.amount,
      date: values.date,
      fromWalletId: values.fromWalletId,
      toWalletId: values.toWalletId,
      type: values.type,
    };
  } else {
    data = {
      comment: values.comment,
      amount: values.amount,
      date: values.date,
      walletId: values.walletId,
      categoryId: values.categoryId,
      type: values.type,
    };
  }

  return await API.post(`${urls.MONEY_OPERATION}`, data)
    .then((res) => {
      console.log(res.data);
      if (res.status === 400) {
        toast.error(res.data, toastOption);
      }
      toast.success("Успешно добавлен !", toastOption);
      return res.date;
    })
    .catch((error) => {
      console.log(error.response.data);
      if (error.response.status === 400) {
        for (var key in error.response.data) {
          toast.error(`${error.response.data[key]}`, toastOption);
        }
      } else {
        toast.error("Ошибка при добавлении !", toastOption);
      }
      return error;
    });
};

export const deleteMoneyOperation = (id) => async () => {
  return await API.delete(`${urls.MONEY_OPERATION}/${id}`)
    .then((res) => {
      console.log(res.data);
      toast.success("Успешно удалено !", toastOption);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      toast.error("Ошибка при удалении !", toastOption);
      return error;
    });
};

export const getMoneyOperationById = (id) => async (dispatch) => {
  dispatch(getMoneyOperationRequest());
  return API.get(`${urls.MONEY_OPERATION}/${id}`)
    .then((res) => {
      dispatch(getMoneyOperationSuccess(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      dispatch(getMoneyOperationSuccess(error));
      return error;
    });
};

export const updateMoneyOperation = (values, id) => async () => {
  let data = {
    comment: values.comment,
    amount: values.amount,
    date: values.date,
  };

  return await API.put(`${urls.MONEY_OPERATION}/${id}`, data)
    .then((res) => {
      console.log(res.data);
      toast.success("Успешно сохранено !", toastOption);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      toast.error("Ошибка при сохранении !", toastOption);
      return error;
    });
};

export const getMoneyOperationsRequest = () => {
  return {
    type: GET_MONEY_OPERATIONS_REQUEST,
  };
};

export const getMoneyOperationsSuccess = (data) => {
  return {
    type: GET_MONEY_OPERATIONS_SUCCESS,
    payload: data,
  };
};

export const getMoneyOperationsFailure = (error) => {
  return {
    type: GET_MONEY_OPERATIONS_ERROR,
    payload: error,
  };
};

export const getMoneyOperationRequest = () => {
  return {
    type: GET_MONEY_OPERATION_REQUEST,
  };
};

export const getMoneyOperationSuccess = (data) => {
  return {
    type: GET_MONEY_OPERATION_SUCCESS,
    payload: data,
  };
};

export const getMoneyOperationFailure = (error) => {
  return {
    type: GET_MONEY_OPERATION_ERROR,
    payload: error,
  };
};
