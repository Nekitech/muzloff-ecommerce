import React, {FC, ReactNode} from 'react';
import styles from './Overlay.module.scss';

export interface OverlayProps {
    children: ReactNode,
    handleOpenPopup: (isOpen: boolean) => void
}

const Overlay: FC<OverlayProps> = ({children, handleOpenPopup}) => {

    return (
        <div className={styles.overlay} onClick={() => handleOpenPopup(false)} data-testid="Overlay">
            <div onClick={() => handleOpenPopup(false)}>X</div>
            {children}
        </div>

    )
};

export default Overlay;
