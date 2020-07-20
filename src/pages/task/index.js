import React, { Component } from 'react';
import { Button, Tag, Table , Modal, DatePicker, Input } from 'antd';
import './index.less'
import moment from 'moment'
const { TextArea } = Input;

const nowTime = moment(new Date(new Date().getTime() + 24 * 60 * 60 * 1000))

class Task extends Component{
    state = {
        columns: [{
            title: '编号',
            dataIndex: 'id'
        },{
            title: '描述',
            dataIndex: 'task'
        },{
            title: '时间',
            render: text => {
                let { time, complete, state } = text;
                if(state === 2) {
                    time = complete;
                }
                let timeArr = time.match(/\d+/g)
                return '{1}-{2} {3}:{4}'.replace(/\{(\d+)\}/g, (val, g1)=>{
                    // console.log(val, g1)
                    let res = timeArr[g1] || '0';
                    return res.length < 2 ? '0' : res
                })
            }
        },{
            title: '状态',
            dataIndex: 'state',
            render(text, record, index) {
                return text === 1 ? '未完成' : '已完成'
            }
        },{
            title: '操作',
            render: (text) => {
                let { state } = text;
                return <>
                    <Button type="link">删除</Button>
                    {state === 1 ? <Button type="link">已完成</Button> : null}
                </>
            }
        }],
        dataSource: [
            {
                id: 1,
                task: '夫君子之行，',
                state: 1,
                time: '2020-07-20 17:49:00',
                complete: '2020-07-20 17:49:00'
            }
        ],
        visible: false,
        task: '',
        time: nowTime
    }
    render(){
        let { visible, task, dataSource, columns, time } = this.state;
        return <section className="taskBox">
            <header className="headerBox">
                <h2>OA 管理系统</h2>
                <Button type="primary" onClick={ev => this.setState({visible:true})}>增加</Button>
            </header>
            <nav className="navBox">
                <Tag color="#55acee">全部</Tag>
                <Tag>未完成</Tag>
                <Tag>已完成</Tag>
            </nav>
            <Table dataSource={dataSource} columns={columns} pagination={false} rowKey="id"/>;
            {/* 对话框 */}
            <Modal
            visible={visible}
            title="Title"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            maskClosable={false}
            footer={[
                <Button key="back" onClick={this.handleCancel}>
                    取消
                </Button>,
                <Button key="submit" type="primary"  onClick={this.handleOk}>
                确认
                </Button>,
            ]}
            >
                <p>人物描述</p>
                <TextArea rows={4} task={task}></TextArea>
                <br/>
                <br/>
                <p>选择日期</p>
                <DatePicker showTime defaultValue={time} onChange={this.onChange} onOk={this.onOk} />
            </Modal>
            
        </section>
    }

   

    handleOk = () => {

    }
    handleCancel = () => {
        this.setState({
            visible: false,
            task: '',
            time: nowTime
        })
    }

    onChange = () => {

    }
    onOk = () => {

    }


}

export default Task
