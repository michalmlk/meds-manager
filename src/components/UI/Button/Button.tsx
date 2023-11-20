import React from 'react';
import classes from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ButtonProps = {
    icon?: any;
    label?: string;
    severity: 'primary' | 'secondary' | 'danger';
    outlined?: boolean;
    onClick?: () => void;
    type?: 'submit' | 'button';
};

const Button: React.FC<ButtonProps> = ({
    icon,
    label,
    severity,
    outlined,
    onClick,
    type = 'button',
}) => {
    return (
        <button
            onClick={onClick}
            className={`${classes.button} ${classes[severity]} ${outlined && 'outlined'}`}
            type={type}
        >
            {icon && <FontAwesomeIcon icon={icon} />} {label}
        </button>
    );
};

export default Button;
