import { useAuth } from '../providers/AuthProvider';
import classes from '../App.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
function App() {
    const { userData, handleSignIn, handleLogout } = useAuth();
    return (
        <div className={classes.wrapper}>
            <h1 style={{ color: 'red' }}>Hello {userData ? userData.displayName : 'World'}</h1>
            <button onClick={handleSignIn}>Sign in</button>
            <button onClick={handleLogout}>Sign out</button>
            <NavLink to={'meds'}>MEDS</NavLink>
            <Outlet />
        </div>
    );
}

export default App;
