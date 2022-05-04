import AboutPage from '../pages/about';
import Error404 from '../pages/errors/404';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import ProjectPage from '../pages/projects';
import ProjectCreatePage from '../pages/projects/create';
import ProjectShowPage from '../pages/projects/show';


export const appRoute = [
    { path: '', element: <HomePage /> },
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
    { path: '*', element: <Error404 /> },
];


