import React, {useEffect, useState} from 'react';

function Alipay() {

    const [htmlContent, setHtmlContent] = useState("<div>正在跳转支付宝支付...</div>");
    useEffect(() => {
        console.log('组件已经挂载');
        fetch('/api/pay/getWebPay')
            .then(response => response.text())
            .then((data) => {
                console.log('data:', data);
                const formElement = document.createElement("div");
                formElement.style.display = "display:none;";
                formElement.innerHTML = data;//去到from
                if (formElement.firstChild) {
                    formElement.firstChild.target = "_self";
                    document.body.appendChild(formElement);
                    formElement.firstChild.submit();//进行跳转
                    document.body.removeChild(formElement);
                }
            });
    }, []);
    return (
        <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
    );


//
//
// const [payUrl, setPayUrl] = useState('');
//
// useEffect(() => {
//     // 调用接口获取支付信息
//     fetch('/api/pay/getWebPay')
//         .then((response) => {
//             console.log('响应',response)
//             console.log('响应2',response.text())
//         })
//         .then(data => {
//             // 使用获取的支付信息生成支付链接
//             setPayUrl(data.payUrl);
//             // 打开支付宝支付页面
//             window.location.href = data.payUrl;
//         });
//
//     // 监听支付回调页面的 URL，获取支付结果
//     const intervalId = setInterval(() => {
//         if (window.location.href.indexOf('/pay-callback') !== -1) {
//             clearInterval(intervalId);
//             const searchParams = new URLSearchParams(window.location.search);
//             const result = searchParams.get('result');
//             if (result === 'success') {
//                 // 处理支付成功的情况
//                 console.log('支付成功');
//             } else {
//                 // 处理支付失败的情况
//                 console.log('支付失败');
//             }
//         }
//     }, 500);
// }, []);
//
// return <div>正在跳转支付宝支付...</div>;
}

export default Alipay;


