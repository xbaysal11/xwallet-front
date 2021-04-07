import { urls, toastOption } from "../../config";
import { API } from "../../utils";
import QS from "query-string";
import { toast } from "react-toastify";
import {
  GET_MONEY_OPERATIONS_REQUEST,
  GET_MONEY_OPERATIONS_SUCCESS,
  GET_MONEY_OPERATIONS_ERROR,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../actionTypes";

export const getMoneyOperations = ({ filters = {} } = {}) => async (
  dispatch
) => {
  const qs = QS.stringify(filters);

  dispatch(getMoneyOperationsRequest());
  return API.get(`${urls.MONEY_OPERATION}/?${qs}`)
    .then((res) => {
      console.log(res);
      dispatch(getMoneyOperationsSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getMoneyOperationsFailure(error));
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
  let user = JSON.parse(localStorage.getItem("user"));
  let data = {
    action: "delete",
    categories: [{ id: id }],
  };
  return await API.put(
    `${urls.CANTEENS}${user.canteen_roles[0].canteen.id}/product/categories/`,
    data
  )
    .then((res) => {
      console.log(res.data);
      toast.success("Успешно удалено !", toastOption);
    })
    .catch((error) => {
      console.log(error);
      toast.error("Ошибка при удалении !", toastOption);
    });
};

export const getMoneyOperationById = (id) => async (dispatch) => {
  let user = JSON.parse(localStorage.getItem("user"));
  dispatch(getCategoryRequest());
  return API.get(
    `${urls.CANTEENS}${user.canteen_roles[0].canteen.id}/product/categories/${id}/`
  )
    .then((res) => {
      dispatch(getCategorySuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getCategorySuccess(error));
    });
};

export const updateMoneyOperation = (values, id) => () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let data = {};
  let pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  values.map((item) => {
    let itemData = {
      name: item.name,
      color: item.color,
    };
    if (item.icon && !pattern.test(item.icon)) {
      itemData.icon = item.icon;
    }
    data = itemData;
  });
  return API.patch(
    `${urls.CANTEENS}${user.canteen_roles[0].canteen.id}/product/categories/${id}/`,
    data
  )
    .then((res) => {
      console.log(res.data);
      toast.success("Успешно сохранено !", toastOption);
    })
    .catch((error) => {
      console.log(error);
      toast.error("Ошибка при сохранении !", toastOption);
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
