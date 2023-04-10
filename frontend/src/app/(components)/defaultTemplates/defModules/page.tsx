import React, {FC} from 'react';
import styles from './page.module.scss';

export interface TemplateNameProps {
}

const Page: FC<TemplateNameProps> = () => {
    return (
        <div className={styles.templateName} data-testid="Page">
            Page Component
        </div>

    )
};

export default Page;
