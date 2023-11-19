import React from 'react';
import classes from './Dropdown.module.scss';

type DropdownProps = {
    label: string;
    id: string;
    options: { value: any; name: string }[];
};

const Dropdown: React.FC<DropdownProps> = ({ label, id, options }): JSX.Element => {
    return (
        <div className={classes.wrapper}>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id}>
                {options.length
                    ? options.map((option) => <option value={option.value}>{option.name}</option>)
                    : ''}
            </select>
        </div>
    );
};

export default Dropdown;
