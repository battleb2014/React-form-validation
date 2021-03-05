import React from 'react';
import BasicInfo from './Basic-info';

const Form = () => {
    return (
        <div class="container">

            <form name="form" action="index.html" method="post" novalidate>
                <p id="form-hint" class="form-hint"><span class="asterisk">*</span> - required field</p>

                <UserInfo />

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
                                
      </div >

            <fieldset id="activities" class="activities">
                <legend>Register for Activities <span class="asterisk">*</span></legend>
                <div id="activities-box" class="activities-box error-border">
                    <label>
                        <input type="checkbox" name="all" data-cost="200">
                            <span>Main Conference</span>
                            <span class="activity-cost">$200</span>
                            <img class="activity-img js-img" src="img/js.svg" alt="">
          </label>
                            <label>
                                <input type="checkbox" name="js-libs" data-day-and-time="Tuesday 9am-12pm" data-cost="100">
                                    <span>JavaScript Libraries Workshop</span>
                                    <span>Tuesday 9am-12pm</span>
                                    <span class="activity-cost">$100</span>
                                    <img class="activity-img react-img" src="img/react.svg" alt="">
          </label>
                                    <label>
                                        <input type="checkbox" name="node" data-day-and-time="Tuesday 1pm-4pm" data-cost="100">
                                            <span>Node.js Workshop</span>
                                            <span>Tuesday 1pm-4pm</span>
                                            <span class="activity-cost">$100</span>
                                            <img class="activity-img node-img" src="img/node.svg" alt="">
          </label>
                                            <label>
                                                <input type="checkbox" name="js-frameworks" data-day-and-time="Tuesday 9am-12pm" data-cost="100">
                                                    <span>JavaScript Frameworks Workshop</span>
                                                    <span>Tuesday 9am-12pm</span>
                                                    <span class="activity-cost">$100</span>
                                                    <img class="activity-img angular-img" src="img/angular.svg" alt="">
          </label>
                                                    <label>
                                                        <input type="checkbox" name="build-tools" data-day-and-time="Tuesday 1pm-4pm" data-cost="100">
                                                            <span>Build tools Workshop</span>
                                                            <span>Tuesday 1pm-4pm</span>
                                                            <span class="activity-cost">$100</span>
                                                            <img class="activity-img build-img" src="img/build.svg" alt="">
          </label>
                                                            <label>
                                                                <input type="checkbox" name="npm" data-day-and-time="Wednesday 9am-12pm" data-cost="100">
                                                                    <span>npm Workshop</span>
                                                                    <span>Wednesday 9am-12pm</span>
                                                                    <span class="activity-cost">$100</span>
                                                                    <img class="activity-img npm-img" src="img/npm.svg" alt="">
          </label>
                                                                    <label>
                                                                        <input type="checkbox" name="express" data-day-and-time="Wednesday 1pm-4pm" data-cost="100">
                                                                            <span>Express Workshop</span>
                                                                            <span>Wednesday 1pm-4pm</span>
                                                                            <span class="activity-cost">$100</span>
                                                                            <img class="activity-img express-img" src="img/express.svg" alt="">
          </label>
        </div>
                                                                        <p id="activities-cost" class="activities-cost">Total: $0</p>
                                                                        <p id="activities-hint" class="activities-hint hint">Choose at least one activity</p>
      </fieldset>

                                                                    <fieldset class="payment-methods">
                                                                        <legend>Payment Info</legend>

                                                                        <div class="payment-method-box">
                                                                            <label for="payment">I'm going to pay with:</label>
                                                                            <select id="payment" name="user-payment">
                                                                                <option value="select method" hidden>Select Payment Method</option>
                                                                                <option value="credit-card">Credit Card</option>
                                                                                <option value="paypal">PayPal</option>
                                                                                <option value="bitcoin">Bitcoin</option>
                                                                            </select>
                                                                        </div>

                                                                        <div id="credit-card" class="credit-card">
                                                                            <div class="expiration-box">
                                                                                <div class="month-box">
                                                                                    <label for="exp-month">Expiration Date:</label>
                                                                                    <select id="exp-month" name="user-exp-month" class="error-border">
                                                                                        <option hidden>Select Date</option>
                                                                                        <option value="1">01 - January</option>
                                                                                        <option value="2">02 - February</option>
                                                                                        <option value="3">03 - March</option>
                                                                                        <option value="4">04 - April</option>
                                                                                        <option value="5">05 - May</option>
                                                                                        <option value="6">06 - June</option>
                                                                                        <option value="7">07 - July</option>
                                                                                        <option value="8">08 - August</option>
                                                                                        <option value="9">09 - September</option>
                                                                                        <option value="10">10 - October</option>
                                                                                        <option value="11">11 - November</option>
                                                                                        <option value="12">12 - December</option>
                                                                                    </select>
                                                                                </div>

                                                                                <div class="year-box">
                                                                                    <label for="exp-year">Expiration Year:</label>
                                                                                    <select id="exp-year" name="user-exp-year" class="error-border">
                                                                                        <option hidden>Select Year</option>
                                                                                        <option value="2021">2021</option>
                                                                                        <option value="2022">2022</option>
                                                                                        <option value="2023">2023</option>
                                                                                        <option value="2024">2024</option>
                                                                                        <option value="2020">2025</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>

                                                                            <div class="credit-card-box">
                                                                                <div class="num-box">
                                                                                    <label for="cc-num">Card Number: <span class="asterisk">*</span>
                                                                                        <input id="cc-num" name="user-cc-num" type="text" class="error-border">
                                                                                            <span id="cc-hint" class="cc-hint hint">Credit card number must be between 13 - 16 digits</span>
              </label>
            </div>

                                                                                    <div class="zip-box">
                                                                                        <label for="zip">Zip Code: <span class="asterisk">*</span>
                                                                                            <input id="zip" name="user-zip" type="text" class="error-border">
                                                                                                <span id="zip-hint" class="zip-hint hint">Zip Code must be 5 digits</span>
              </label>
            </div>

                                                                                        <div class="cvv-box">
                                                                                            <label for="cvv">CVV: <span class="asterisk">*</span>
                                                                                                <input id="cvv" name="user-cvv" type="text" class="error-border">
                                                                                                    <span id="cvv-hint" class="cvv-hint hint">CVV must be 3 digits</span>
              </label>
            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div id="paypal" class="paypal">
                                                                                        <h3>PayPal</h3>
                                                                                        <p>If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when
            you click “Register” below.</p>
                                                                                    </div>

                                                                                    <div id="bitcoin" class="bitcoin">
                                                                                        <h3>Bitcoin</h3>
                                                                                        <p>If you selected the Bitcoin option we'll take you to the Coinbase site to set up your billing information.
            Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.</p>
                                                                                    </div>
      </fieldset>

                                                                                <button type="submit">Register</button>
    </form>
                                                                        </div>
    );
}

export default Form;