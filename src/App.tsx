import classes from './App.module.scss';
import LocationView from './components/LocationView/LocationView.tsx';

function App() {
    return (
        <div className={classes.wrapper}>
            <LocationView location={0} />
        </div>
    );
}

export default App;
