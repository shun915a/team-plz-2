import axios from "axios";
import { createProfile } from "../urls/index";

export const genProfile = async (params) => {
  return await axios
    .post(createProfile, {
      email: params.profile.email,
      uid: params.profile.uid,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};
