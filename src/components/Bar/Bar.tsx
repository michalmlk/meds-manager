import React from 'react';
import classes from './Bar.module.scss';
import { DocumentData } from 'firebase/firestore';

type BarProps = {
    locations: DocumentData | undefined;
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
};

const Bar: React.FC<BarProps> = ({ locations, onChange }): JSX.Element => {
    return (
        <div className={classes.bar}>
            <h1>Med assist</h1>
            <select onChange={onChange}>
                {locations &&
                    locations.map((loc: DocumentData) => (
                        <option key={loc.id} id={loc.id} value={loc.id}>
                            {loc.name}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default Bar;
