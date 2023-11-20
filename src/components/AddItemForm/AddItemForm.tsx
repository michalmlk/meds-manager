import React, { ChangeEvent, useState } from 'react';
import classes from './AddItemForm.module.scss';
import Input from '../UI/Input/Input';
import Dropdown from '../UI/Dropdown/Dropdown';
import Button from '../UI/Button/Button';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DocumentData } from 'firebase/firestore';

type FormValues = {
    name: string;
    amount: number;
    inPack: number;
    perDay: number;
    location: number;
};

type AddItemFormProps = {
    locations: DocumentData;
    onSubmit: (formValues: FormValues) => void;
    onClose: () => void;
};

const AddItemForm: React.FC<AddItemFormProps> = ({ locations, onSubmit, onClose }): JSX.Element => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        amount: 0,
        inPack: 0,
        perDay: 0,
        location: 0,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className={classes.wrapper}>
            <form>
                <Input
                    type="string"
                    label="Name"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                />
                <Input
                    type="number"
                    label="Amount"
                    id="amount"
                    name="amount"
                    value={formValues.amount}
                    onChange={handleInputChange}
                />
                <Input
                    type="number"
                    label="In pack"
                    id="inPack"
                    name="inPack"
                    value={formValues.inPack}
                    onChange={handleInputChange}
                />
                <Input
                    type="number"
                    label="Per day"
                    id="perDay"
                    name="perDay"
                    value={formValues.perDay}
                    onChange={handleInputChange}
                />
                <Dropdown
                    label="Location"
                    id="location"
                    name="location"
                    options={locations}
                    onChange={handleInputChange}
                />
                <div className={classes.footer}>
                    <Button
                        onClick={onClose}
                        icon={faTimes}
                        label="Cancel"
                        severity="secondary"
                        type="button"
                    />
                    <Button
                        onClick={() => {
                            onSubmit(formValues);
                        }}
                        icon={faPlus}
                        label="Add"
                        severity="primary"
                        type="button"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddItemForm;
