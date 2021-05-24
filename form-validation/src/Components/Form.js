import React, { Component } from 'react';
import BasicInfo from './Basic-Info';
import Shirts from './Shirts';
import Activities from './Activities';
import Payments from './Payments';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            name: '',
            nameValid: false,
            email: '',
            emailValid: false,
            cardNumber: '',
            cardNumberValid: false,
            zipCode: '',
            zipCodeValid: false,
            cvv: '',
            cvvValid: false
        };

        this.handleTotal = this.handleTotal.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onCreditCardChange = this.onCreditCardChange(this);
        this.onZipCodeChange = this.onZipCodeChange.bind(this);
        this.onCvvChange = this.onCvvChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.paymentOption = this.paymentOption.bind(this);
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onCreditCardChange(e) {
        this.setState({
            cardNumber: e.value
        });
        console.log(this.state.cardNumber);
    }

    onZipCodeChange(e) {
        this.setState({
            zipCode: e.target.value
        });
    }

    onCvvChange(e) {
        this.setState({
            cvv: e.target.value
        });
    }

    handleTotal(e) {
        if (e.target.checked) {
            if (e.target.value === '200') {
                this.setState({
                    total: this.state.total + 200
                });
            } else {
                this.setState({
                    total: this.state.total + 100
                });
            }
        } else {
            if (e.target.value === '200') {
                this.setState({
                    total: this.state.total - 200
                });
            } else {
                this.setState({
                    total: this.state.total - 100
                });
            }
        }
    }

    paymentOption(e) {
        const activityList = document.querySelector('#activities');
        const paymentMethod = document.querySelector('#payment');
        const creditCardOption = paymentMethod.querySelector('option[value = "credit-card"]');
        const creditCardInput = document.querySelector('#cc-num');
        const zipInput = document.querySelector('#zip');
        const cvvInput = document.querySelector('#cvv');

        if (creditCardOption.selected === true) {
            this.validationCheck(this.validateCardNumber, creditCardInput);
            this.validationCheck(this.validateZipCode, zipInput);
            this.validationCheck(this.validateCvv, cvvInput);
        }

        if (this.validateActivities) {
            activityList.classList.remove('not-valid');
            activityList.classList.add('valid');
            activityList.lastElementChild.style.display = "none";
        }
        else {
            e.preventDefault();
            activityList.classList.add('not-valid');
            activityList.classList.remove('valid');
            activityList.lastElementChild.style.display = "inline";
        }
    }

    validationCheck(isValid, elem) {
        if (!isValid) {
            console.log(`fail`);
            elem.parentElement.className = 'not-valid';
            elem.parentElement.lastElementChild.style.display = 'inline';
        } else {
            console.log(`pass`);
            elem.parentElement.className = 'valid';
            elem.parentElement.lastElementChild.style.display = 'none';
        }
    }

    handleRegister(e) {
        const applicantName = document.querySelector('#name');
        const email = document.querySelector('#email');

        e.preventDefault();

        this.validationCheck(this.validateName, applicantName);
        this.validationCheck(this.validateEmail, email);

        this.paymentOption();
    }

    render() {
        return (
            <form name='form' method='post' noValidate>
                <p id='form-hint' className='form-hint'><span className='asterisk'>*</span> - required field</p>
                <div className='basic-info-and-shirt-box'>
                    <BasicInfo
                        nameChange={this.onNameChange}
                        emailChange={this.onEmailChange}
                    />
                    <Shirts />
                </div>
                <Activities
                    total={this.state.total}
                    handleTotal={this.handleTotal}
                />
                <Payments
                    onCreditCardChange={this.onCreditCardChange}
                    onZipCodeChange={this.onZipCodeChange}
                    onCvvChange={this.onCvvChange}
                />
                <button type="submit" onClick={this.handleRegister}>Register</button>
            </form>
        );
    }
}

export default Form;