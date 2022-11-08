import React, { Fragment, Component } from 'react';
class PhoneForm extends Component {
    state = {
        name: "기본이름",
        phone: "000-000-0000"
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCreate = () => {
        this.props.addPhone(this.state)
    }
    render() {
        return (
            <Fragment >
                <input
                    placeholder="이름"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <input
                    placeholder="전화번호"
                    name="phone"
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button onClick={this.handleCreate}>추가</button>


            </Fragment>
        );
    }
}
export default PhoneForm;
