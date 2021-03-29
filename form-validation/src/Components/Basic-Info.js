import React from 'react';

class BasicInfo extends Component {
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
            <fieldset className='basic-info'>
                <legend>Basic Info</legend>

                <label for='name'>Name: <span className='asterisk'>*</span>
                    <input type='text' id='name' name='user-name' className='error-border' />
                    <span id='name-hint' className='name-hint hint'>Name field cannot be blank</span>
                </label>

                <label for='email'>Email: <span className='asterisk'>*</span>
                    <input type='email' id='email' name='user-email' className='error-border' />
                    <span id='email-hint' className='email-hint hint'>Name field cannot be blank</span>
                </label>

                <label for='title'>Job Role</label>
                <select id='title' name='user-title'>
                    <option hidden>Select Job Role</option>
                    <option value='full-stack js developer'>Full Stack Javascript Developer</option>
                    <option value='front-end developer'>Front End Developer</option>
                    <option value='back-end developer'>Back End Developer</option>
                    <option value='designer'>Designer</option>
                    <option value='student'>Student</option>
                    <option value='other'>Other</option>
                </select>

                <input type='text' name='other-job-role' id='other-job-role' className='other-job-role' placeholder='Other job role?' />
            </fieldset>
        );
    }
}

export default BasicInfo;