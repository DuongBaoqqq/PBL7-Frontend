
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://27.69.251.31:9000/', // Điền URL của API của bạn
});

export default instance