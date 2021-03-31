import { urls, toastOption } from "../../config";
import { API } from "../../utils";

import { toast } from "react-toastify";
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../actionTypes";

export const getCategories = (page = 1) => async (dispatch) => {
  let user = JSON.parse(localStorage.getItem("user"));
  dispatch(getCategoriesRequest());
  return API.get(
    `${urls.CANTEENS}${user.canteen_roles[0].canteen.id}/product/categories/?page=${page}`
  )
    .then((res) => {
      console.log(res.data);
      dispatch(getCategoriesSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getCategoriesFailure(error));
    });
};

export const createCategory = (values) => async () => {
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

export const deleteCategory = (id) => async () => {
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

export const getCategoryById = (id) => async (dispatch) => {
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

export const updateCategory = (values, id) => () => {
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

export const getCategoriesRequest = () => {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
};

export const getCategoriesSuccess = (data) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: data,
  };
};

export const getCategoriesFailure = (error) => {
  return {
    type: GET_CATEGORIES_ERROR,
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
