import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';
import Button from '../Button/Button';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const Backdrop: React.FC<{ onClick: () => void }> = ({ onClick }): JSX.Element => {
    return <div className={classes.backdrop} onClick={onClick}></div>;
};

type ContentProps = {
    children: ReactElement[];
    title: string;
    onConfirm: () => void;
    onClose: () => void;
};

const Content: React.FC<ContentProps> = ({ children, title, onConfirm, onClose }): JSX.Element => {
    return (
        <div className={classes.modal}>
            <div className={classes.header}>{title}</div>
            {children}
            <h1>Hello</h1>
            <div className={classes.footer}>
                <Button onClick={onClose} severity="secondary" icon={faTimes} label="Close" />
                <Button onClick={onConfirm} severity="primary" icon={faPlus} label="Add" />
            </div>
        </div>
    );
};

type ModalProps = {
    title: string;
    content: ReactElement[];
    onConfirm: () => void;
    onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ title, content, onConfirm, onClose }) => {
    return (
        <>
            {createPortal(
                <Backdrop onClick={onClose} />,
                document.getElementById('modal-backdrop')!
            )}
            {createPortal(
                <Content
                    children={content}
                    title={title}
                    onClose={onClose}
                    onConfirm={onConfirm}
                />,
                document.getElementById('modal-root')!
            )}
        </>
    );
};

export default Modal;
