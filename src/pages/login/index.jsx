import { Box, Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userClearError, userLogin } from '../../store/actions/user-action';
import { useRedirectAdmin, useRedirectLogUser } from '../../hooks/redirect-hook';

//react hook form frameworks pour construire des formulaires en react
//yup c est une bibliotheque pour valider la structure des donnees .
const loginSchema = yup.object({
    login: yup.string().trim().required(),
    password: yup.string().required(),
}).required();

//↑ on veut que le login soit de type string sans espace et est un champ obligatoire 

const LoginPage = () => {
    useRedirectAdmin();
    useRedirectLogUser();
//on crée un useeffect qui va utiliser le usedispatch pour verif que le login page est respecter 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userClearError);
    }, []);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            login: '',
            password: ''
        },
        resolver: yupResolver(loginSchema),
        reValidateMode: 'onSubmit'
    });
//crée une const onSubmit avec les 2 attributs login et password dans un objet , alors affiche via dispatch le login et password du user .
    const onSubmit = ({ login, password }) => {
        dispatch(userLogin({ identifier: login, password }));
    };
//↓return un formulaire creant un event handlesubmit sur la logique plus haut .
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Box gap='20px' display='flex' flexDirection='column'  >
                    <Controller
                        render={({ field }) =>
                            <TextField
                                error={errors.login}
                                fullWidth
                                label='Login / E-mail'
                                {...field}
                            />
                        }
                        name='login'
                        control={control}
                        defaultValue=''

                    />

                    <Controller
                        render={({ field }) =>
                            <TextField
                                error={errors.password}
                                fullWidth
                                label='Password'
                                type='password'
                                {...field} />
                        }
                        name='password'
                        control={control}
                        defaultValue=''


                    />

                    <Box alignSelf='flex-start'>
                        <Button variant='contained' type='submit' >Envoyer</Button>
                    </Box>
                </Box>



            </form>
        </>

    );
};

export default LoginPage;