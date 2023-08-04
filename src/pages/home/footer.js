import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <footer className="container  pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md text-left">
                        <small className="d-block mb-3 text-muted">Marvin工作室 &copy; 2023 版权所有</small>
                        <small className="d-block mb-3 text-muted">
                            <p><a href="sitemap.xml">站点地图</a></p>
                        </small>

                    </div>
                    <div className="col-12 col-md">
                        <p>
                            客服QQ: 767137738
                        </p>
                        <p>
                            QQ交流群: <a target="_blank" href="https://jq.qq.com/?_wv=1027&amp;k=EvmBYr0C"
                                         className="text-decoration-none">652661150</a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
