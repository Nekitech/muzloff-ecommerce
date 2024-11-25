import React, {FC} from 'react';
import styles from './page.module.scss';

export interface TemplateNameProps {
}

const TemplateName: FC<TemplateNameProps> = () => {
    return (
        <div className={styles.templateName} data-testid="TemplateName">
            TemplateName Component
        </div>

    )
};

export default TemplateName;
