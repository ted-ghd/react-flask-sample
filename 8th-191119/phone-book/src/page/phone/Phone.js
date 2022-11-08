import React, { Fragment, Component } from 'react';
import PhoneList from '../../Components/PhoneList';
import { Route } from 'react-router-dom';
import { Button } from 'antd';

class Phone extends Component {

    render() {
        return (
            <Fragment >
                <PhoneList />
            </Fragment>
        );
    }
}
export default Phone;
