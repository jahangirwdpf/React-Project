
import React  from 'react';

const FormI = (props) => {
    return (
        <div>
            <label htmlFor="exampleFormControlInput" className='form-label'>{props.title}</label>
            <input
                type= {props.type}
                className='form-control'
                name= {props.name}
                onChange= {props.onChange}
                value={props.value}
            />
        </div>
    );
}

export default FormI;