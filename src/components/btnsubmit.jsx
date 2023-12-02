import React from 'react';

const BtnSubmit = (props) => {
    return (
        <div className="col-auto">
            <button type={props.type} className={`btn btn-primary mb-3 ${props.className}`}>{props.text}</button>
        </div>
    );
}

export default BtnSubmit;