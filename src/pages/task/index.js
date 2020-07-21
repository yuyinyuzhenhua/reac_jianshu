import React, { Component } from 'react';
import { Button, Tag, Table , Modal, DatePicker, Input, message } from 'antd';
import './index.less'
import api from '../../api/index';
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
        time: nowTime,
        loading: false,
        tagList: [
            {
                state: 0,
                text: '全部',
                selected: true
            },
            {
                state: 1,
                text: '未完成',
                selected: false
            },
            {
                state: 2,
                text: '已完成',
                selected: false
            }
        ]
    }
    render(){
        let { visible, task, dataSource, columns, time, loading, tagList } = this.state;
        return <section className="taskBox">
            <header className="headerBox">
                <h2>OA 管理系统</h2>
                <Button type="primary" onClick={ev => this.setState({visible:true})}>增加</Button>
            </header>
            <nav className="navBox" onClick={this.changeTag} style={{margin: '20px 0'}}>
                {
                    tagList.map(item => {
                        return <Tag color={item.selected ? "#55acee" : '' } key={item.state} state={item.state}>{item.text}</Tag>
                    })
                }
            </nav>
            <Table dataSource={dataSource} columns={columns} pagination={false} loading={loading} rowKey="id"/>
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
                <TextArea rows={4} task={task} onInput={e => this.setState({task: e.target.value}) }></TextArea>
                <br/>
                <br/>
                <p>选择日期</p>
                <DatePicker showTime defaultValue={time} onChange={this.onChange} onOk={this.onOk} />
            </Modal>
            
        </section>
    }

    changeTag = (e) => {
        let current = e.target.getAttribute('state') - 0;
        let tagList1 =   this.state.tagList.map(item => {
            if(item.state === current) {
                item.selected = true;
            } else {
                item.selected = false;
            }
            return item;
        });
        this.setState({
            tagList: tagList1
        })
        this.queryData(current)
        localStorage.setItem('state', current)
    }
   

    handleOk = async () => {
        let{ task, time } = this.state;
        console.log(task)
        if(task.trim().length <= 0){
            message.info('任务不能为空')
            return;
        }
        if(!time){
            message.info('时间无效')
            return;
        }
        // console.log(time.toDate().getFullYear())
        let date = time.toDate();
        let newtime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getMinutes()}`;
        let result = await api.task.addTask(task, newtime);
        console.log(result)
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

    queryData = async state => {
        this.setState({ loading: true });
        let result = await api.task.getTaskList(state)
        let { code, list } = result;
        this.setState({ loading: false });
        if(parseInt(code) === 0){
            this.setState({
                dataSource: list
            })
            return;
        }
        message.error('获取数据失败,请稍后在尝试')
    }

    componentDidMount(){
        let state = localStorage.getItem('state')-0 || 0;
        if(state !== 0){
            let tagList1 = this.state.tagList.map(item => {
                if(item.state === state) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
                return item;
            });
            this.setState({
                tagList: tagList1
            })
        };
        this.queryData(state)
    }
}

export default Task
