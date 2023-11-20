import React, { useState } from 'react';
import classes from './Bar.module.scss';
import { DocumentData } from 'firebase/firestore';
import Button from '../UI/Button/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from '../UI/Modal/Modal';
import AddItemForm from '../AddItemForm/AddItemForm';
import { doc, setDoc } from 'firebase/firestore';
import { DataService } from '../../DataService';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../../hooks/useAuth';

type BarProps = {
    locations: DocumentData | undefined;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Bar: React.FC<BarProps> = ({ locations, onChange }): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { userData } = useAuth();
    const dataService = new DataService();

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleAddItem = async (formValues: any): Promise<void> => {
        await setDoc(doc(dataService.db, 'ownedMeds', `med-${uuidv4()}`), {
            ...formValues,
            location: parseInt(formValues.location),
            id: uuidv4(),
            userId: userData.uid,
        });
        handleModalClose();
    };

    return (
        <div className={classes.bar}>
            {isModalOpen && (
                <Modal title="Add item" onClose={handleModalClose} renderFooter={false}>
                    <AddItemForm
                        locations={locations!}
                        onSubmit={handleAddItem}
                        onClose={handleModalClose}
                    />
                </Modal>
            )}
            <h1>Med assist</h1>
            <Button icon={faPlus} severity="primary" onClick={handleModalOpen} />
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
