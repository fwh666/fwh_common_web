import App from '../pages/app/app.js';
import PaymentPage from "../pages/pay/PaymentPage";
import MyPage from "../pages/home/MyPage";
import Product from "../pages/product/Product";
import Buy from "../pages/pay/Buy";
import HomeTest from "../pages/test/HomeTest";
import {Route} from "react-router-dom";
import About from "../pages/about/About";
import Alipay from "../pages/pay/Alipay";
import LoginPage from '../pages/Login/index.jsx';
import Register from '../pages/Register/index.jsx';
import DashBoard from '../pages/DashBoard/index.jsx';

// 所有页面路由的映射路径
export default [
    {
        path: '/app',
        element: <App/>,
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/paymentPage',
        element: <PaymentPage/>,
    },
    {
        path: '/alipay',
        element: <Alipay/>
    },
    {
        path: '/user',
        element: "www.baidu.com"
    },
    {
        path:'/register',
        element: <Register/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/dashboard',
        element:<DashBoard/>
    },
    // 默认打开首页地址
    {
        path: '/',
        // element: <App/>
        // element: <HomeTest/>
        // element: <MyPage/>
        // element: <Product/>
        // element: <Buy/>
        // element:<LoginPage/>
        // element: <Register/>
        element:<DashBoard/>
    }
]