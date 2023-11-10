import React from 'react';
import classes from './Header.module.scss';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../hooks/useAuth';

const Header: React.FC<{ onRedirect: (path: string) => void }> = ({ onRedirect }) => {
    const { userData, handleLogout } = useAuth();

    const logoutHandler = async (): Promise<void> => {
        try {
            await handleLogout();
            onRedirect('/login');
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.details}>
                <h1>{userData ? `Hello ${userData.displayName}` : 'Meds assistant'}</h1>
                <div className={classes.avatar}>
                    <img src={userData ? userData.photoURL : ''} />
                </div>
            </div>
            {userData && (
                <div className={classes.navItems}>
                    <NavLink to={'meds'}>MEDS</NavLink>
                </div>
            )}
            <div className={classes.buttons}>
                {userData && <Button icon={faSignOut} onClick={logoutHandler} label="Sign out" severity="secondary" />}
            </div>
        </div>
    );
};
export default Header;
