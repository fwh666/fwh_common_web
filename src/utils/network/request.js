import axios from 'axios';
import {message} from 'antd';


const instance = axios.create({
    baseURL: '',
    withCredentials: true,
});

// instance.interceptors.request.use(
//   (config) => {
//     return config;
//   }
// );

instance.interceptors.response.use(
    (response = {}) => {
        const {
            data: {code, data},
            status,
        } = response;
        //封装解析code码
        if ([200].includes(status)) {
            if (['00000', '0'].includes(code)) return data;
            message.error(response.data.message);
            return Promise.reject(response.data);
        }
        message.info('网络异常，请稍后再试');
        return Promise.reject(response);
    },
    (responseError) => {
        const {response = {}, message: errMessage} = responseError;
        if (!axios.isCancel(responseError)) {
            const {
                config = {},
                status
            } = response;
            if ([401].includes(status)) {
                message.info('登录失效，请重新登录');
                return Promise.reject(responseError);
            }
            message.info('网络异常，请稍后再试');
            return Promise.reject(responseError);
        }
        if (axios.isCancel(responseError) && errMessage) {
            message.info(errMessage);
            return Promise.reject(responseError);
        }
        message.info('网络异常，请稍后再试');
        return Promise.reject(responseError);
    }
);

export default instance;
