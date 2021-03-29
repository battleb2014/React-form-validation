import React, { Component } from 'react';
import BasicInfo from './Basic-Info';
import Shirts from './Shirts';
import Activities from './Activities';
import Payments from './Payments';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: ' ',
            email: ' '
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    onNameChange(e) {
        this.setState({
            userName: e.target.value
        });
        console.log(this.userName);
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        })
        console.log(this.email);
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