import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useRedirectLogUser = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.token && user.isAdmin === false) {
            navigate('/');
        }
    });
};

export const useRedirectNotAdmin = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.isAdmin === null) {
            navigate('/');
        }
    });
};

export const useRedirectAdmin = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.isAdmin) {
            navigate('/admin');
        }
    });
};

