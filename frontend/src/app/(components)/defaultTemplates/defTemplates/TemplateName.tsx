import React, {FC} from 'react';
import styles from './TemplateName.module.scss';

export interface TemplateNameProps {
}

const TemplateName: FC<TemplateNameProps> = () => {
    return (
        <div className={styles.templateName} data-testid="Page">
            Page Component
        </div>

    )
};

export default TemplateName;
