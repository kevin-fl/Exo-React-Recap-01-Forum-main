import AboutPage from '../pages/about';
import Error404 from '../pages/errors/404';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import ProjectPage from '../pages/projects';
import ProjectCreatePage from '../pages/projects/create';
import ProjectShowPage from '../pages/projects/show';
import Admin from '../pages/admin/admin';
import AdminProjects from '../pages/admin/admin-projects';
import AdminProject from '../pages/admin/admin-project';

// ↓export de toutes les routes disponibles ↑import de toutes les pages pour assurer la cohesion .
export const appRoute = [
    {
        path: '', element: <HomePage />
    },
    {
        path: 'projects',
        children: [
            {
                index: true, element: <ProjectPage />
            },
            {
                path: ':id', element: <ProjectShowPage />
            },
            {
                path: 'create', element: <ProjectCreatePage />
            }
        ]
    },
    {
        path: 'about', element: <AboutPage />
    },
    {
        path: 'register', element: <RegisterPage />
    },
    {
        path: 'login', element: <LoginPage />
    },
    {
        path: 'admin',
        children: [
            {
                index: true, element: <Admin />
            },
            {
                path: 'projects',
                children: [
                    {
                        index: true, element: <AdminProjects />
                    },
                    {
                        path: ':id', element: <AdminProject />
                    }
                ]
            }
        ]
    },
    { path: '*', element: <Error404 /> }
];


