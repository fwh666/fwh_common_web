import {Button, Form, InputNumber, message, Select, Space, Table} from 'antd'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import instance from '../../utils/network';
import './App.css';

function App() {
    const [form] = Form.useForm();
    // 跳转到新页面
    const navigate = useNavigate();
    //红色默认值
    const [redArray, setRedArray] = useState([
        {
            value: 1
        }, {
            value: 2
        }, {
            value: 3
        }, {
            value: 4
        }, {
            value: 5
        }, {
            value: 6
        }
    ]);
    //监听红色号码变化记录
    const changeNumber = (value, idx) => {
        // console.log(redArray.filter(item => item.value === value))
        //校验输入的重复数据
        if (redArray.filter(item => item.value === value).length) return message.error('号码重复')
        redArray[idx].value = value;
        setRedArray([...redArray]);
    };
    //提交操作JS
    const onFinish = () => {
        const {validateFields} = form;
        validateFields()
            .then(values => {
                values.redBall = redArray.map(v => v.value);
                console.log('入参:', values);
                instance.post('/api/fwh/ball', {
                    ...values,
                }).then((res = []) => {
                    // console.log('响应:', JSON.stringify(res));
                    console.log('响应:', res);
                    //当前页面回显数据
                    // setResData(JSON.stringify(res));
                    setResData(res);
                    if (res.length > 0) {
                        setShowTable(true);
                    }

                    //新页面-透传响应值-回显列表
                    // window.appData= res;
                    // navigate('/view?');
                })
                // console.log('values', values);
            })
    };
    //设置回显条件
    const [isShowTable, setShowTable] = useState(false);
    //设置回显数据
    const [resViewData, setResData] = useState(null);
    //table回显字段数据源
    const columns = [
        {
            title: '期号',
            dataIndex: 'blueBall',
            key: 'blueBall'
        },
        {
            title: '信息',
            dataIndex: 'context',
            key: 'context'
        },
    ];

    //返回页面div
    return (
        <div className="App">
            <Form
                name="basic"
                form={form}
                autoComplete="off"
                labelCol={{
                    span: 4,
                }}
            >
                <Form.Item label="红色号码球:" required name="redBall">
                    <div className="redBall_wrap">
                        <Form.Item name="redBall" rules={[{required: true, message: '请输入红色号码球',},]}>
                            <Space>
                                {
                                    redArray.map((item, idx) => <InputNumber key={idx} value={item.value} min={1}
                                                                             max={33} size={"large"}
                                        // 事件监听数据变动
                                                                             onChange={(value) => changeNumber(value, idx)}/>)
                                }
                            </Space>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item label="蓝色号码球:" name="blueBall" rules={[{required: true, message: '请输入蓝色号码球',},]}>
                    <Space>
                        {
                            <InputNumber min={1} max={19} size={"large"}/>
                            // redArray.map((item, idx) => <InputNumber key={idx} value={item.value} min={1}
                            //                                          max={19} size={"large"}
                            //                     // 事件监听数据变动
                            //                                          onChange={(value) => changeNumber(value, idx)}/>)
                        }
                    </Space>
                </Form.Item>
                <Form.Item label="年份" name="year" rules={[{required: true, message: '请选择年份',},]}>
                    {/*2013~2022*/}
                    <Select
                        style={{
                            width: 120,
                        }}
                        options={[
                            {
                                value: '2022',
                                label: '2022',
                            },
                            {
                                value: '2021',
                                label: '2021',
                            },
                            {
                                value: '2020',
                                label: '2020',
                            },
                            {
                                value: '2019',
                                label: '2019',
                            },
                            {
                                value: '2018',
                                label: '2018',
                            },
                            {
                                value: '2017',
                                label: '2017',
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={onFinish}>
                        查询
                    </Button>
                </Form.Item>
            </Form>

            {
                isShowTable && (
                    //rowKey 唯一的ID
                    <Table dataSource={resViewData} columns={columns} rowKey={() => 'blueBall'} bordered={true}/>
                )
            }
        </div>
    );
}

export default App;
