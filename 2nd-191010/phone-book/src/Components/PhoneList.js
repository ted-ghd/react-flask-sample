import React, { Fragment, Component } from 'react';
import PhoneForm from './PhoneForm'
import PhoneInfo from './PhoneInfo'

class PhoneList extends Component {
    id = 1
    state = {
        information: [
            {
                name: "기본이름",
                phone: "000-000-0000",
                id: 0
            }
        ]
    }

    addPhone = (data) => {
        const tmp = {
            name: data.name,
            phone: data.phone,
            id: this.id++
        }

        this.setState({
            information: this.state.information.concat(tmp)
        })
    }
    render() {
        console.log(this.state.information)
        return (
            <Fragment >
                <PhoneForm addPhone={this.addPhone} />
                <PhoneInfo phone={this.state.information[0]} />


            </Fragment>
        );
    }
}

export default PhoneList;
