import React, { Component } from 'react';
import BasicInfo from './Basic-Info';
import Shirts from './Shirts';
import Activities from './Activities';
import Payments from './Payments';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);

        this.state = {
            userName: ' ',
            email: ' ',
        };
    }

    onNameChange(e) {
        this.setState({ userName: e.target.value });
        console.log(this.userName);
    }

    render() {
        return (
            <form name='form' method='post' noValidate>
                <p id='form-hint' className='form-hint'><span className='asterisk'>*</span> - required field</p>
                <div className='basic-info-and-shirt-box'>
                    <BasicInfo />
                    <Shirts />
                </div>
                <Activities />
                <Payments />
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default Form;