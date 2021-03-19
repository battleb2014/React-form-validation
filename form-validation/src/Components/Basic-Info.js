import React from 'react';

const BasicInfo = (props) => {
    componentDidMount(){
        this.nameInput.focus();
    }

    return (
        <fieldset className='basic-info'>
            <legend>Basic Info</legend>

            <label for='name'>Name: <span className='asterisk'>*</span>
                <input type='text' id='name' name='user-name' className='error-border'
                    ref={(input) => { this.nameInput = input }} onChange={props.onNameChange} />
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

export default BasicInfo;