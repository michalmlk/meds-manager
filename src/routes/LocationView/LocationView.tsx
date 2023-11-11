import React, { useEffect, useState } from 'react';
import { DataService } from '../../DataService';
import { DocumentData } from 'firebase/firestore';
import Bar from '../../components/Bar/Bar';
import ItemsList from './components/ItemsList/ItemsList';
import classes from './LocationView.module.scss';

const LocationView: React.FC = (): JSX.Element => {
    const [currentLocation, setCurrentLocation] = useState<number>(0);
    const [currentMeds, setCurrentMeds] = useState<DocumentData[]>();
    const [locs, setLocs] = useState<DocumentData>();
    const service = new DataService();
    useEffect(() => {
        const fetchLocalisations = async (): Promise<void> => {
            const res = await service.getLocations();
            setLocs(res);
        };

        const fetchMeds = async (): Promise<void> => {
            const res = await service.getAllMeds();
            setCurrentMeds(res.filter((r) => r.location === Number(currentLocation)));
        };
        fetchMeds();
        fetchLocalisations();
        //eslint-disabled-next-line
    }, [currentLocation]);

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setCurrentLocation(Number(e.target.value));
    };

    return (
        <div className={classes.wrapper}>
            <Bar locations={locs} onChange={handleLocationChange} />
            <div className={classes.content}>
                {currentMeds && <ItemsList items={currentMeds} />}
            </div>
        </div>
    );
};

export default LocationView;
