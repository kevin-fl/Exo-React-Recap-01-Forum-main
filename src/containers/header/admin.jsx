import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/actions/user-action';

const HeaderAdmin = () => {
    const dispatch = useDispatch();

    return (
        <header>
            <AppBar position='static' style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                        component={NavLink}
                        to='/'
                    >
                        <HomeIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', flexGrow: 1, gap: '20px' }}>
                        <Typography color='inherit' variant='h6' component={NavLink} to='admin/projects' sx={{ textDecoration: 'none' }}>
                            Projects
                        </Typography>
                    </Box>


                    <Button color='inherit' component={NavLink} to={'/admin'}>Admin</Button>
                    <Button color='inherit' component='div' onClick={() => {
                        dispatch(userLogout());
                    }}>Logout</Button>



                </Toolbar>
            </AppBar>
        </header>
    );
};

export default HeaderAdmin;