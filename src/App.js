import { Box, Container, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Footer from './containers/footer';
import Header from './containers/header';
import HeaderAdmin from './containers/header/admin';
import { appRoute } from './routes';

function App() {
  //↓ va recup les routes de toutes les pages le dossier route
  const routes = useRoutes(appRoute);
  const user = useSelector(state => state.user);
  return (<>
    <CssBaseline />
    <Box display='flex' minHeight='100vh' flexDirection='column'>
      {user.isAdmin ? <HeaderAdmin /> : <Header />}; 
      {/* ↑si user.isAdmin existe affiche le header admin sinon non */}
      <Box flex={1}>
        <main>
          <Container >
            {/* container contient la const routes */}
            {routes}
          </Container>
        </main>
      </Box>
      <Footer />
    </Box>
  </>);
}

export default App;
