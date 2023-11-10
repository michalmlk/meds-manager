import classes from '../App.module.scss';
import Header from '../components/UI/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    return (
        <div className={classes.wrapper}>
            <Header onRedirect={navigate} />
            <Outlet />
        </div>
    );
}

export default App;
