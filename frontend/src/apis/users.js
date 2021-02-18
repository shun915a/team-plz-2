import axios from "axios";
import { postUser } from "../urls/index";

export const postUser = async (params) => {
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
