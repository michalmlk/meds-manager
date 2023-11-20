import React, { ChangeEvent } from 'react';
import classes from './Input.module.scss';

type InputProps = {
    label: string;
    id: string;
    name?: string;
    type: 'number' | 'string';
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, id, name, type, value, onChange }): JSX.Element => {
    return (
        <div className={classes.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={value} name={name} onChange={onChange} />
        </div>
    );
};

export default Input;
