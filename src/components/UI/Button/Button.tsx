import React from 'react';
import classes from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ButtonProps = {
    icon?: any;
    label?: string;
    severity: 'primary' | 'secondary' | 'danger';
    outlined?: boolean;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ icon, label, severity, outlined, onClick }) => {
    return (
        <button onClick={onClick} className={`${classes.button} ${classes[severity]} ${outlined && 'outlined'}`}>
            {icon ? <FontAwesomeIcon icon={icon} /> : label}
        </button>
    );
};

export default Button;
