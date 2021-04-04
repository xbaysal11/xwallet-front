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
  return API.get(`${urls.WALLETS}/?${qs}`)
    .then((res) => {
      console.log(res);
      dispatch(getWalletsSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getWalletsFailure(error));
    });
};

export const createWallet = (values) => async () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let data = {};
  values.map((item) => {
    let itemData = {
      name: item.name,
      color: item.color,
      icon: item.icon,
    };
    data = itemData;
  });
  return await API.post(
    `${urls.CANTEENS}${user.canteen_roles[0].canteen.id}/product/categories/`,
    data
  )
    .then((res) => {
      console.log(res.data);
      if (res.status === 400) {
        toast.error(res.data, toastOption);
      }
      toast.success("Успешно добавлен !", toastOption);
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
    });
};

export const deleteWallet = (id) => async () => {
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

export const getWalletById = (id) => async (dispatch) => {
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

export const updateWallet = (values, id) => () => {
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
