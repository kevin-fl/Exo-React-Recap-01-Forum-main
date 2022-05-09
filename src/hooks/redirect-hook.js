import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useRedirectLogUser = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    // ↓le useEffect va permettre de mettre la condition si user.token existe mais que user.isAdmin est faux , redirige sur l'url / home 
    useEffect(() => {
        if (user.token && user.isAdmin === false) {
            navigate('/');
        }
    });
};

// ↓meme chose si admin is null 
export const useRedirectNotAdmin = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.isAdmin === null) {
            navigate('/');
        }
    });
};

// ↓si user.isadmin is true , navigation dans le /admin qui permet d edit les projets , etc...
export const useRedirectAdmin = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user.isAdmin) {
            navigate('/admin');
        }
    });
};

