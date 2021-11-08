import { toast } from "react-toastify";
import api from "../../apiService";
import * as types from "../contants/auth.constant";
const authAction = {};
authAction.signup = (dataform) => async (dispatch) => {
  dispatch({ type: types.SIGN_UP_REQUEST });
  try {
    let url = "/auth/register";
    const data = await api.post(url, dataform);
    console.log(data);
    dispatch({ type: types.SIGN_UP_SUCCESS, payload: data.data });
    toast.success("You've successfully sign up");
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.SIGN_UP_FAIL, payload: error.message });
  }
};
authAction.signin = (dataform) => async (dispatch) => {
  dispatch({ type: types.SIGN_IN_REQUEST });
  try {
    let url = "/auth/login";
    const data = await api.post(url, dataform);
    console.log(data);
    dispatch({ type: types.SIGN_IN_SUCCESS, payload: data.data });
    toast.success("You've successfully sign in");
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.SIGN_IN_FAIL, payload: error.message });
  }
};

export default authAction;
