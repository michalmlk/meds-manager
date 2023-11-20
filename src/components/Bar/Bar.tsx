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
import { toast } from 'react-toastify';

type BarProps = {
    locations: DocumentData | undefined;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Bar: React.FC<BarProps> = ({ locations, onChange }): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');
    const { userData } = useAuth();
    const service = new DataService();

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleAddItem = async (formValues: any): Promise<void> => {
        if (formValues.name !== '') {
            const itemId = uuidv4();
            const toastId = toast.loading('Creating item...');
            try {
                await setDoc(doc(service.db, 'ownedMeds', itemId), {
                    ...formValues,
                    location: parseInt(formValues.location),
                    id: itemId,
                    userId: userData.uid,
                });
                toast.success('Item successfully added.');
                handleModalClose();
            } catch (e) {
                toast.error('Error when creation item.');
            }
            toast.dismiss(toastId);
        } else {
            toast.error('Please enter item name.');
        }
    };

    return (
        <div className={classes.bar}>
            {isModalOpen && (
                <Modal
                    title="Add item"
                    onClose={handleModalClose}
                    renderFooter={false}
                    confirmIcon={faPlus}
                    confirmLabel="Add"
                    confirmSeverity="primary"
                >
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
            <div>{error}</div>
        </div>
    );
};

export default Bar;
