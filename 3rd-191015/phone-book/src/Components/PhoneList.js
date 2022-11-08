import React, { Fragment, Component } from 'react';
import PhoneForm from './PhoneForm'
import PhoneInfo from './PhoneInfo'
import { Table, Button, Input } from 'antd'

class PhoneList extends Component {
    id = 2
    state = {
        editable: -1,
        information: [
            {
                name: "홍길동",
                phone: "010-1234-5678",
                id: 1
            }
        ]
    }

    addPhone = (data) => {

        const tmp = {
            name: data.name,
            phone: data.phone,
            id: this.id++,
            // id : this.state.information[this.state.information.length-1].id + 1
        }

        this.setState({
            information: this.state.information.concat(tmp)
        })
    }

    deletePhone = (event, text) => {

        console.log(text)
        this.setState({
            information: this.state.information
                .filter(item => item.id !== parseInt(event.target.name, 10))
        })
    }

    toggleEdit = (e) => {
        this.setState({
            editable: parseInt(e.target.name)
        })
    }
    render() {
        console.log(this.state.editable)
        const columns = [
            { title: 'ID', dataIndex: 'id', key: 'id', },

            {
                title: '이름', dataIndex: 'name', key: 'name',
                render: (text, record) => this.state.editable === record.id ? <Input value={text} /> : text
            },

            {
                title: '전화번호', dataIndex: 'phone', key: 'phone',
                render: (text, record) => this.state.editable === record.id ? <Input value={text} /> : text
            },


            {
                title: '삭제', dataIndex: 'id', action: 'delete', key: 'delete',
                render: id => <Button type="danger"
                    name={id}
                    onClick={this.deletePhone}
                >
                    삭제</Button>
            },
            {
                title: '수정', dataIndex: 'id', action: 'edit', key: 'edit',
                render: id => this.state.editable === id ? <Button type="primary" name={id} onClick={this.toggleEdit}> 저장 </Button>
                    : <Button type="primary" name={id} onClick={this.toggleEdit}> 수정 </Button>
            }


        ]
        return (
            <Fragment >
                <PhoneForm addPhone={this.addPhone} />
                <Table rowKey="id" columns={columns}
                    dataSource={this.state.information} />
                {/*
                <div>
                    {arr}
                </div>

                <div>
                    {arr.concat(6)}
                </div>

                <div>
                    {arr.filter(item => item % 2 === 0)}
                </div>

                <div>
                    {arr.find(item => item % 2 === 0)}
                </div>

                <div>
                    {arr.slice(0, 3)}
                </div>

                <div>
                    { arr.map(item => item * 2) }
                </div>
                */}

            </Fragment>
        );
    }
}

export default PhoneList;
