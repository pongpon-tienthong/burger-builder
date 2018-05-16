import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-a8e72.firebaseio.com'
})

export default instance;