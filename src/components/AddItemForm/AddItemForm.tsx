import React from 'react';
import classes from './AddItemForm.module.scss';
import Input from '../UI/Input/Input';
import Dropdown from '../UI/Dropdown/Dropdown';

type AddItemFormProps = {
    locations: any;
};

const AddItemForm: React.FC<AddItemFormProps> = ({ locations }): JSX.Element => {
    return (
        <div className={classes.wrapper}>
            <form>
                <Input type="string" label="Name" id="name" />
                <Input type="number" label="Amount" id="amount" />
                <Input type="number" label="In pack" id="inPack" />
                <Input type="number" label="Per day" id="perDay" />
                <Dropdown label="Location" id="location" options={locations} />
            </form>
        </div>
    );
};

export default AddItemForm;
