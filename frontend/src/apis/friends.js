import axios from 'axios';
import { friendsIndex } from '../urls/index'

export const fetchRestaurants = async() => {
  return await axios.get(friendsIndex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}