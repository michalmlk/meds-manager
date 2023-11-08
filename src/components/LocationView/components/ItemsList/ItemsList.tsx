import React from 'react';
import { DocumentData } from 'firebase/firestore';
import Item from './components/Item/Item';
import classes from './ItemsList.module.scss';

type ItemsListProps = {
    items: DocumentData[];
};

const ItemsList: React.FC<ItemsListProps> = ({ items }): JSX.Element => {
    return (
        <div className={classes.wrapper}>
            {items.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
};

export default ItemsList;
