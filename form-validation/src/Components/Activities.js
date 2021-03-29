import React from 'react';
import Activity from './Activity';
import js from '../img/js.svg';
import react from '../img/react.svg';
import node from '../img/node.svg';
import angular from '../img/angular.svg';
import build from '../img/build.svg';
import npm from '../img/npm.svg';
import express from '../img/express.svg';

const Activities = () => {

    const activityList = [
        { name: 'js-libs', dayAndTime: 'Tuesday 9am-12pm', title: 'JavaScript Libraries Workshop', cost: '100', className: 'activity-img react-img', src: { react } },
        { name: 'node', dayAndTime: 'Tuesday 1pm-4pm', title: 'Node.js Workshop', cost: '100', className: 'activity-img node-img', src: { node } },
        { name: 'js-frameworks', dayAndTime: 'Tuesday 9am-12pm', title: 'JavaScript Frameworks Workshop', cost: '100', className: 'activity-img angular-img', src: { angular } },
        { name: 'build-tools', dayAndTime: 'Tuesday 1pm-4pm', title: 'Build tools Workshop', cost: '100', className: 'activity-img build-img', src: { build } },
        { name: 'npm', dayAndTime: 'Wednesday 9am-12pm', title: 'npm Workshop', cost: '100', className: 'activity-img npm-img', src: { npm } },
        { name: 'express', dayAndTime: 'Wednesday 1pm-4pm', title: 'Express Workshop', cost: '100', className: 'activity-img express-img', src: { express } }
    ];
    return (
        <fieldset id='activities' className='activities'>
            <legend>Register for Activities</legend>
            <div id='activities-box' className='activities-box error-border'>
                <label>
                    <input type='checkbox' name='all' data-cost='200' />
                    <span>Main Conference</span>
                    <span className='activity-cost'>$200</span>
                    <img className='activity-img js-img' src={js} alt=''></img>
                </label>

                {activityList.map((activity) => (
                    <Activity name={activity.name} cost={activity.cost} className={activity.className} />
                ))}
                {/*<label>
                    <input type='checkbox' name='js-libs' data-day-and-time='Tuesday 9am-12pm' data-cost='100' />
                    <span>JavaScript Libraries Workshop</span>
                    <span>Tuesday 9am-12pm</span>
                    <span className='activity-cost'>$100</span>
                    <img className='activity-img react-img' src={react} alt='' />
                </label>

                <label>
                    <input type='checkbox' name='node' data-day-and-time='Tuesday 1pm-4pm' data-cost='100' />
                    <span>Node.js Workshop</span>
                    <span>Tuesday 1pm-4pm</span>
                    <span className='activity-cost'>$100</span>
                    <img className='activity-img node-img' src={node} alt='' />
                </label>

                <label>
                    <input type='checkbox' name='js-frameworks' data-day-and-time='Tuesday 9am-12pm' data-cost='100' />
                    <span>JavaScript Frameworks Workshop</span>
                    <span>Tuesday 9am-12pm</span>
                    <span className='activity-cost'>$100</span>
                    <img className='activity-img angular-img' src={angular} alt='' />
                </label>

                <label>
                    <input type='checkbox' name='build-tools' data-day-and-time='Tuesday 1pm-4pm' data-cost='100' />
                    <span>Build tools Workshop</span>
                    <span>Tuesday 1pm-4pm</span>
                    <span className='activity-cost'>$100</span>
                    <img className='activity-img build-img' src={build} alt='' />
                </label>

                <label>
                    <input type='checkbox' name='npm' data-day-and-time='Wednesday 9am-12pm' data-cost='100' />
                    <span>npm Workshop</span>
                    <span>Wednesday 9am-12pm</span>
                    <span className='activity-cost'>$100</span>
                    <img className='activity-img npm-img' src={npm} alt='' />
                </label>

                <label>
                    <input type='checkbox' name='express' data-day-and-time='Wednesday 1pm-4pm' data-cost='100' />
                    <span>Express Workshop</span>
                    <span>Wednesday 1pm-4pm</span>
                    <span className='activity-cost'>$100</span>
                    <img className='activity-img express-img' src={express} alt='' />
                </label> */}
            </div>

            <p id='activities-cost' className='activities-cost'>Total: $0</p>
            <p id='activities-hint' className='activities-hint hint'>Choose at least one activity</p>
        </fieldset>
    );
}

export default Activities;