import React from 'react';

const Activity = (props) => {
    return (
        <div>
            <label>
                <input type='checkbox' name={props.name} data-day-and-time={props.dayAndTime} data-cost={props.cost} />
                <span>{props.title}</span>
                <span>{props.dayAndTime}</span>
                <span className='activity-cost'>${props.cost}</span>
                <img className={props.className} src={props.src} alt='' />
            </label>
        </div>
    );
}

export default Activity;