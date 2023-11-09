import classes from '../App.module.scss';
import Header from '../components/UI/Header/Header';
import { Outlet } from 'react-router-dom';
function App() {
    return (
        <div className={classes.wrapper}>
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
