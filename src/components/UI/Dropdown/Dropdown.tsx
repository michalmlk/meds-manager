import React, { ChangeEvent } from 'react';
import classes from './Dropdown.module.scss';
import { DocumentData } from 'firebase/firestore';

type DropdownProps = {
    label: string;
    id: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: DocumentData;
};

const Dropdown: React.FC<DropdownProps> = ({ label, id, options, onChange }): JSX.Element => {
    return (
        <div className={classes.wrapper}>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id} onChange={onChange}>
                {options.length
                    ? options.map((option: { id: number; name: string }) => (
                          <option key={option.id} value={option.id}>
                              {option.name}
                          </option>
                      ))
                    : ''}
            </select>
        </div>
    );
};

export default Dropdown;
