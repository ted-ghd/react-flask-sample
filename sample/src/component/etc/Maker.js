import React, { Component } from 'react';
import { Table } from 'reactstrap';
import {
    Icon
  } from 'antd';

class Etc extends Component {
  
  render() {

    return (
        <Table>
            <tbody>
                <tr>
                    <th>이름</th>
                    <th>연락처</th>
                </tr>
                <tr>
                    <td>김태성</td>
                    <td>010-4937-8022</td>
                </tr>
            </tbody>
        </Table>
    );
  }
}

export default Etc;
