import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

//permet d utiliser le usertoken(bearertoken) pour une fois ceci charger , soit via const user login accepter ou pas le login en fonction de l identifiant et du password 

export const userToken = createAction('user/token', ({ token, expire }) => {
    const { pseudo, isAdmin } = jwtDecode(token);
    return {
        payload: {
            token,
            expire,
            pseudo,
            isAdmin
        }
    };
});

export const userLogout = createAction('user/logout');

export const userSendError = createAction('user/sendError');
export const userClearError = createAction('user/clearError');

export const userLogin = ({ identifier, password }) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/api/auth/login', { identifier, password })
            .then(({ data }) => {
                dispatch(userToken(data));
            }).catch(() => {
                dispatch(userSendError());
            });
    };
};
//↓meme chose mais pour la page register 
export const userRegister = ({ pseudo, email, password }) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/api/auth/register', { pseudo, email, password })
            .then(({ data }) => {
                dispatch(userToken(data));
            }).catch(() => {
                dispatch(userSendError());
            });;
    };
};