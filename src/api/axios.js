import axios from 'axios';

// 1. 把公用的配置写上
const instance = axios.create({
  baseURL: "https://api.realworld.io/api"
})

// 2. 请求拦截

// 3. 拦截返回数据，做统一修改，成功的话直接返回数据部分，失败就统一提示
instance.interceptors.response.use(res=> {
  if (res.statusCode !== 200) {
      console.log('error');
    }
      return res.data;
  }

)

export default instance;
