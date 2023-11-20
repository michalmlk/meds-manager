import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';
import Button from '../Button/Button';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Backdrop: React.FC<{ onClick: () => void }> = ({ onClick }): JSX.Element => {
    return <div className={classes.backdrop} onClick={onClick}></div>;
};

type ContentProps = {
    children: ReactElement | ReactElement[];
    title: string;
    renderFooter: boolean;
    confirmIcon: any;
    confirmLabel: string;
    onConfirm?: () => void;
    onClose?: () => void;
    confirmSeverity: 'danger' | 'primary' | 'secondary';
};

const Content: React.FC<ContentProps> = ({
    title,
    onConfirm,
    onClose,
    children,
    renderFooter,
    confirmLabel,
    confirmIcon,
    confirmSeverity,
}): JSX.Element => {
    return (
        <div className={classes.modal}>
            <div className={classes.header}>{title}</div>
            {children}
            {renderFooter && (
                <div className={classes.footer}>
                    <Button
                        onClick={onClose}
                        severity="secondary"
                        icon={faTimes}
                        label="Close"
                        outlined
                    />
                    <Button
                        onClick={onConfirm}
                        severity={confirmSeverity}
                        icon={confirmIcon}
                        label={confirmLabel}
                    />
                </div>
            )}
        </div>
    );
};

type ModalProps = {
    title: string;
    children: ReactElement | ReactElement[];
    renderFooter: boolean;
    confirmIcon: any;
    confirmLabel: string;
    onConfirm?: () => void;
    onClose: () => void;
    confirmSeverity: 'danger' | 'primary' | 'secondary';
};

const Modal: React.FC<ModalProps> = ({
    title,
    onConfirm,
    onClose,
    children,
    renderFooter,
    confirmIcon,
    confirmLabel,
    confirmSeverity,
}) => {
    return (
        <>
            {createPortal(
                <Backdrop onClick={onClose} />,
                document.getElementById('modal-backdrop')!
            )}
            {createPortal(
                <Content
                    children={children}
                    title={title}
                    onClose={onClose}
                    onConfirm={onConfirm}
                    renderFooter={renderFooter}
                    confirmIcon={confirmIcon}
                    confirmLabel={confirmLabel}
                    confirmSeverity={confirmSeverity}
                />,
                document.getElementById('modal-root')!
            )}
        </>
    );
};

export default Modal;
