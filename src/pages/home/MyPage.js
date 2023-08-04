import React from 'react';
import {Helmet} from 'react-helmet';

import Header from "./header";
import Footer from "./footer";
import Main from "./Main";

class MyPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                    <title>Vpn特惠</title>
                    <meta name="description" content="VPN特惠账号-质量保障"/>
                    <meta name="keywords" content="VPN独享账号,VPN精品账号,VPN成品号,VPN精品账号,VPN成品号,VPN,VPN在线体验,VPN官网,VPN登录,VPN注册,VPN地址"/>
                    <link rel="stylesheet" href="path/to/normalize.css"/>
                    <link rel="stylesheet" href="path/to/my-style.css"/>
                </Helmet>
                <header>
                    <Header/>
                </header>
                <main>
                    <Main/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default MyPage;