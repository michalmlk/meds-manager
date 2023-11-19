import React from 'react';
import classes from './Input.module.scss';

type InputProps = {
    label: string;
    id: string;
    type: 'number' | 'string';
};

const Input: React.FC<InputProps> = ({ label, id, type }): JSX.Element => {
    return (
        <div className={classes.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
        </div>
    );
};

export default Input;
