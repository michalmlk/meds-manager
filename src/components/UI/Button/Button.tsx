import React from 'react';
import classes from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ButtonProps = {
    icon?: any;
    label?: string;
    severity: 'primary' | 'secondary' | 'danger';
    outlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ icon, label, severity, outlined }) => {
    return (
        <button className={`${classes.button} ${classes[severity]} ${outlined && 'outlined'}`}>
            {icon ? <FontAwesomeIcon icon={icon} /> : label}
        </button>
    );
};

export default Button;
