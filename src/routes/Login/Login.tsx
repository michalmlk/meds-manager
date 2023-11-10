import React from 'react';
import classes from './Login.module.scss';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/UI/Button/Button';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = (): JSX.Element => {
    const { handleSignIn, handleLogout } = useAuth();
    const navigate = useNavigate();
    const { userData } = useAuth();

    if (userData) {
        handleLogout();
    }

    const handleLoginAction = async (): Promise<void> => {
        try {
            await handleSignIn();
            navigate('/meds');
        } catch (e) {
            console.log(e);
            navigate('/login');
        }
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.box}>
                <h1>Welcome!</h1>

                <Button icon={faSignIn} label="Sign In" severity="primary" onClick={handleLoginAction} />
            </div>
        </div>
    );
};

export default Login;
