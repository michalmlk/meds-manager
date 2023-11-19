import React, { useState } from 'react';
import classes from './Bar.module.scss';
import { DocumentData } from 'firebase/firestore';
import Button from '../UI/Button/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from '../UI/Modal/Modal';
import AddItemForm from '../AddItemForm/AddItemForm';

type BarProps = {
    locations: DocumentData | undefined;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Bar: React.FC<BarProps> = ({ locations, onChange }): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classes.bar}>
            {isModalOpen && (
                <Modal
                    title="Add item"
                    onConfirm={() => console.log('ok')}
                    onClose={handleModalClose}
                >
                    <AddItemForm locations={locations} />
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
