import React from "react";
import "./product.css";
import Header from "../home/header";

class Product extends React.Component {

    render() {
        return (

            <div className="row">
                <header>
                    <Header/>
                </header>

                <div className="col p-0">
                    <div className="h6 fw-bold">购买前请仔细阅读购买说明</div>
                    <div className="col border bg-primary-subtle rounded p-2">
                        <div className="imp">
                            <b>重要的事情说三遍:</b>
                            <b>购买账号如果使用公共的wei pn导致账号被封禁，一律不售后！</b>
                            <br/>
                            <b>购买账号如果使用公共的wei pn导致账号被封禁，一律不售后！</b>
                            <br/>
                            <b>购买账号如果使用公共的wei pn导致账号被封禁，一律不售后！</b>
                            <br/>
                        </div>
                    </div>
                    <div className="h6  pt-2">常见问题</div>
                    <div className="border col  px-2 pt-2 bg-secondary-subtle rounded mb-3">
                        <ul>
                            <li>
                                <a href="https://smsjisu.com/static/chatgpt.html"
                                   className="text-decoration-none">解决访问openai网络问题教程</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://chat.openai.com/auth/login"
                                   className="text-decoration-none">登录chatgpt</a>
                            </li>
                            <li>
                                <a target="_blank" href="search.html"
                                   className="text-decoration-none">自主通过订单号查询code</a>
                            </li>
                            <li>
                                <a target="_blank" href="account-help.html#buy"
                                   className="text-decoration-none">账号购买帮助</a>
                            </li>
                            <div className="col-md-12 mt-2">
                                <b>无法登录openai，访问限制，请加QQ群下载视频教程： <a target="_blank"
                                                                                    href="https://jq.qq.com/?_wv=1027&amp;k=EvmBYr0C"
                                                                                    className="text-decoration-none">630207045</a></b>
                            </div>
                            <div>
                                <ul>
                                    <li>🟣： 我收到一个错误，OpenAI的服务在您的国家/地区不可用。</li>
                                    <li>🟢： 更改浏览器，更改VPN。</li>
                                    <li>🟣： 我收到拒绝访问错误，该怎么办？</li>
                                    <li>🟢： 更改浏览器，更改VPN。</li>
                                    <li>🟣： 我收到错误“1小时内请求太多。请稍后再试”，我该怎么办？</li>
                                    <li>🟢： 5分钟后重新登录该服务。</li>
                                    <li>🟣： 最好使用的浏览器是什么？</li>
                                    <li>🟢： 根据我的经验，我推荐谷歌chrome在隐身模式下使用。</li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

        )
            ;
    }
}

export default Product;