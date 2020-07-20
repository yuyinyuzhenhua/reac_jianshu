import React, { Component } from 'react';
import { Button, Tag, Table  } from 'antd';
import './index.less'

class Task extends Component{
    state = {
        columns: [{
            title: '编号',
            dataIndex: ''
        },{
            title: '描述',
            dataIndex: ''
        },{
            title: '时间',
            dataIndex: ''
        },{
            title: '状态',
            dataIndex: ''
        },{
            title: '操作',
            dataIndex: ''
        }],
        dataSource: [

        ]
    }
    render(){
        return <section className="taskBox">
            <header className="headerBox">
                <h2>OA 管理系统</h2>
                <Button type="primary">增加</Button>
            </header>
            <nav className="navBox">
                <Tag color="#55acee">全部</Tag>
                <Tag>未完成</Tag>
                <Tag>已完成</Tag>
            </nav>
            <Table dataSource={this.state.dataSource} columns={this.state.columns} />;
        </section>
    }
}

export default Task
