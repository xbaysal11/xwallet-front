import { urls, toastOption } from "../../config";
import { API } from "../../utils";
import QS from "query-string";

import { toast } from "react-toastify";
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../actionTypes";

export const getCategories = ({ filters = {} } = {}) => async (dispatch) => {
  const qs = QS.stringify(filters);
  dispatch(getCategoriesRequest());
  return API.get(`${urls.CATEGORIES}/?${qs}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getCategoriesSuccess(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      dispatch(getCategoriesFailure(error));
      return error;
    });
};

export const createCategory = (values) => async () => {
  let data = {
    name: values.name,
    type: values.type,
  };

  return await API.post(`${urls.CATEGORIES}`, data)
    .then((res) => {
      console.log(res.data);
      if (res.status === 400) {
        toast.error(res.data, toastOption);
      }
      toast.success("Успешно добавлен !", toastOption);
      return res.data;
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

export const deleteCategory = (id) => async () => {
  return await API.delete(`${urls.CATEGORIES}/${id}/`)
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

export const getCategoryById = (id) => async (dispatch) => {
  dispatch(getCategoryRequest());
  return API.get(`${urls.CATEGORIES}/${id}/`)
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

export const updateCategory = (values, id) => () => {
  let data = {
    name: values.name,
    // type: values.type,
  };

  return API.put(`${urls.CATEGORIES}/${id}/`, data)
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
