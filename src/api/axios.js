import axios from 'axios';
import store from '@/store';

// 1. 把公用的配置写上
const instance = axios.create({
  baseURL: "https://api.realworld.io/api"
})

// 2. 请求拦截
instance.interceptors.request.use(
  function (config) {
    if (store.state.user.token) {
      config.headers.Authorization = `Token ${store.state.user.token}`;
    }
    // console.log('@',res.data);
    return config;
  }
)

// 3. 拦截返回数据，做统一修改，成功的话直接返回数据部分，失败就统一提示
instance.interceptors.response.use(
  function (res) {

    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
)

export default instance;
