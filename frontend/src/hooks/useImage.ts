import {useEffect, useState} from 'react';

const useImage = (fileName: string) => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../public/assets/images/${fileName.toLowerCase()}.svg`);
                setImage(response.default);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, [fileName]);

    return {
        image,
        error,
        loading
    };
};

export default useImage;
