import React from 'react';
import classes from './Header.module.scss';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../providers/AuthProvider';

const Header: React.FC = () => {
    const { userData, handleSignIn, handleLogout } = useAuth();
    return (
        <div className={classes.wrapper}>
            <h1>{userData ? `Hello ${userData.displayName}` : 'Meds assistant'}</h1>
            {userData && (
                <div className={classes.navItems}>
                    <NavLink to={'meds'}>MEDS</NavLink>
                </div>
            )}
            <div className={classes.buttons}>
                {userData ? (
                    <Button icon={faSignOut} onClick={handleLogout} severity="secondary" />
                ) : (
                    <Button icon={faSignIn} onClick={handleSignIn} severity="secondary" />
                )}
            </div>
        </div>
    );
};
export default Header;
