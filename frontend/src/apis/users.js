import axios from "axios";
import { createProfile } from "../urls/index";

export const genProfile = async (params) => {
  return await axios
    .post(createProfile, {
      profile: { email: "test@email.com", uid: "asdf1234" },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};
