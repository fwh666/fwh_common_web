import React from "react";
import './Main.css'
import {Button} from "antd";
import {useNavigate} from 'react-router-dom';

// 函数组件
function Main() {

    //定义跳转函数
    const navigate = useNavigate();

    function handleBuyClick() {
        navigate("/paymentPage");
    }

    // render() {
    return (
        <main>
            {/*todo-fwh-主页内容介绍-跳转到支付页面-支付成功页面发送邮件*/}

            <div className="row">
                <div className="col">
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h3 className="display-4 fw-normal">
                            VPN特惠版 - 付费账号 - 长期稳定
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 mb-3 text-center ">

                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">套餐购买</h4>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1598946114934-8cf259aa241d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3liZXJzZWN1cml0eXx8fHx8fDE2Nzk5NzY5NTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
                            alt="VPN"/>
                    </div>
                </div>

                <div className="col text-center">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3 text-bg-primary border-primary">
                            <h4 className="my-0 fw-normal">账号购买</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                                账号购买
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>VPN特惠账号</li>
                                <li className="special_font">限时特惠价格: ¥19.9</li>
                                <li>永久有效时长</li>
                                <li>加密保护，畅享全球</li>
                                <li>支持账号返利</li>
                                <li>支持流量无限签到增加</li>
                                <li>.</li>
                                <li>.</li>
                            </ul>
                            {/*<a type="button" href="accounts.html" className="w-100 btn btn-lg btn-primary"*/}
                            {/*   target="_blank">立即购买</a>*/}
                            <Button type="primary" htmlType="submit" className="w-100 btn btn-lg btn-primary buy_font"
                                    onClick={handleBuyClick}> 立即购买 </Button>

                        </div>
                    </div>
                </div>
            </div>


            <div className="row text-center">
                <div className="col-lg-4">
                    <h2 className="fw-normal">客服服务</h2>
                    <p>购买以及售前问题; 登陆账号以及密码邮箱形式发送; 账号售出无法找回;</p>
                    <p> QQ: 767137738 备注:VPN特惠 </p>
                    <img className="img_qq_footer"
                         src="https://leanoss.fuwenhao.club/hnOyb1hCGIj0529tJConakjg1tlsaoTY/QQ02.png"
                         alt="客服微信"/>
                </div>
                <div className="col-lg-4">
                    <h2 className="fw-normal">账号展示</h2>
                    <p> 账号库存流量预览 </p>
                    <p> QQ: 767137738 备注:VPN特惠 </p>
                    <img className="img_footer"
                         src="https://leanoss.fuwenhao.club/64x7mvtvuSJ5n6ha0xgQsNqb0iWMmanq/VPN01.png"
                         alt="账号展示"/>
                </div>
                <div className="col-lg-4">
                    <h2 className="fw-normal">使用教程</h2>
                    <p> 支持各个终端的链接使用</p>
                    <p> QQ: 767137738 备注:VPN特惠 </p>
                    <img className="img_footer"
                         src="https://leanoss.fuwenhao.club/WHR6SsulRQjJKTk8y4wBaOTCXOFdM9Da/vpn04.png"
                         alt="使用教程"/>
                </div>
            </div>

        </main>
    );
    // }
}

export default Main;