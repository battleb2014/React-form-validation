import React from 'react';

const BasicInfo = () => {
    return (
        <div class="basic-info-and-shirt-box">
            <fieldset class="basic-info">
                <legend>Basic Info</legend>

                <label for="name">Name: <span class="asterisk">*</span>
                    <input type="text" id="name" name="user-name" class="error-border">
                        <span id="name-hint" class="name-hint hint">Name field cannot be blank</span>
          </label>


                    <label for="email">Email Address: <span class="asterisk">*</span>
                        <input type="email" id="email" name="user-email" class="error-border">
                            <span id="email-hint" class="email-hint hint">Email address must be formatted correctly</span>
          </label>


                        <label for="title">Job Role</label>
                        <select id="title" name="user-title">
                            <option hidden>Select Job Role</option>
                            <option value="full-stack js developer">Full Stack JavaScript Developer</option>
                            <option value="front-end developer">Front End Developer</option>
                            <option value="back-end developer">Back End Developer</option>
                            <option value="designer">Designer</option>
                            <option value="student">Student</option>
                            <option value="other" id='other'>Other</option>
                        </select>

                        <input type="text" name="other-job-role" id="other-job-role" class="other-job-role"
                            placeholder="Other job role?">
        </fieldset>

                        <fieldset class="shirts">
                            <legend>T-Shirt Info</legend>
                            <div class="shirt-div-box">
                                <div id="shirt-sizes" class="shirt-sizes">
                                    <label for="size">Size:</label>
                                    <select id="size" name="user-size">
                                        <option value="small">S</option>
                                        <option value="medium" selected>M</option>
                                        <option value="large">L</option>
                                        <option value="extra large">XL</option>
                                        <option value="extra large">XXL</option>
                                    </select>
                                </div>

                                <div id="shirt-designs" class="shirt-designs">
                                    <label for="design">Design:</label>
                                    <select id="design" name="user-design">
                                        <option hidden>Select Theme</option>
                                        <option value="js puns">Theme - JS Puns</option>
                                        <option value="heart js">Theme - I &#9829; JS</option>
                                    </select>
                                </div>

                                <div id="shirt-colors" class="shirt-colors">
                                    <label for="color" class="color-label">Color:</label>
                                    <select id="color">
                                        <option selected hidden>Select a design theme above</option>
                                        <option data-theme="js puns" value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
                                        <option data-theme="js puns" value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
                                        <option data-theme="js puns" value="gold">Gold (JS Puns shirt only)</option>
                                        <option data-theme="heart js" value="tomato">Tomato (I &#9829; JS shirt only)</option>
                                        <option data-theme="heart js" value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
                                        <option data-theme="heart js" value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>
      </div>
    );
}

export default BasicInfo;