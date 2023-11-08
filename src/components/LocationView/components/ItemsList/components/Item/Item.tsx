import React from 'react';
import { DocumentData } from 'firebase/firestore';
import classes from './Item.module.scss';
import Button from '../../../../../UI/Button/Button';
import { faTimes, faPencil } from '@fortawesome/free-solid-svg-icons';

const Item: React.FC<DocumentData> = (props): JSX.Element => {
    const { amount, inPack, name, perDay } = props;

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <h1>{name}</h1>
                <div className={classes.buttons}>
                    <Button icon={faTimes} severity="danger" />
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
