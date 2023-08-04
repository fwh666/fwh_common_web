import React from "react";
import {Helmet} from "react-helmet"
import "./Buy.css"
import Header from "../home/header";
import Footer from "../home/footer";

class Buy extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <Helmet>
                        <script src="https://cdn.bootcdn.net/ajax/libs/clipboard.js/2.0.11/clipboard.min.js"></script>
                    </Helmet>
                </div>

                <header>
                    <Header/>
                </header>

                <div className="container py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="d-flex flex-column text-center flex-">
                                    <img className="Img"
                                         src="http://images.yungouos.com/alipay/native/code/AT2023032720542103.png"
                                         alt="#"/>
                                    <div className="p-2">
                                        <h3>请使用支付宝扫码支付  &yen;49.9</h3>
                                        <p><a href="javascript:;" onClick="alreadyPay()"
                                              className="btn btn-primary">支付完成请点击</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default Buy;