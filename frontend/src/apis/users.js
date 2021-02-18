import axios from "axios";
import { createUser } from "../urls/index";

export const signUpUser = async (params) => {
  return await axios
    .post(users, {
      uid: params.uid,
      nickname: params.nickname,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};
