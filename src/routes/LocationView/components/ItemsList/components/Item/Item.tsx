import React, { useState } from 'react';
import { DocumentData } from 'firebase/firestore';
import classes from './Item.module.scss';
import Button from '../../../../../../components/UI/Button/Button';
import { faTimes, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { doc, deleteDoc, getFirestore } from 'firebase/firestore';
import Modal from '../../../../../../components/UI/Modal/Modal';
import { toast } from 'react-toastify';

const Item: React.FC<DocumentData> = (props): JSX.Element => {
    const { amount, inPack, name, perDay, id } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);
    const db = getFirestore();

    const handleItemDelete = async (): Promise<void> => {
        const toastId = toast.loading('Removing item...');
        try {
            await deleteDoc(doc(db, 'ownedMeds', id));
            toast.success('Item successfully deleted');
        } catch (e) {
            toast.error('Failed to delete item.');
        }
        toast.dismiss(toastId);
    };

    return (
        <div className={classes.wrapper}>
            {isModalOpen && (
                <Modal
                    title="Confirmation required"
                    onConfirm={handleItemDelete}
                    onClose={handleModalClose}
                    renderFooter={true}
                    confirmIcon={faTrash}
                    confirmLabel="Delete"
                    confirmSeverity="danger"
                >
                    <p>Are you sure you want to delete item {name} ?</p>
                </Modal>
            )}
            <div className={classes.header}>
                <h1>{name}</h1>
                <div className={classes.buttons}>
                    <Button icon={faTimes} severity="danger" onClick={handleModalOpen} />
                    <Button icon={faPencil} severity="primary" />
                </div>
            </div>
            <div className={classes.details}>
                <p>Amount (packages): {amount}</p>
                <p>Per package: {inPack}</p>
                <p>Per day: {perDay}</p>
                <p>Days left: {Math.floor((amount * inPack) / perDay)}</p>
            </div>
        </div>
    );
};

export default Item;
