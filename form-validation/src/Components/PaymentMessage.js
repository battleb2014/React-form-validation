import React from 'react';

const PaymentMessage = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.message}</p>
        </div>
    );
}

export default PaymentMessage;