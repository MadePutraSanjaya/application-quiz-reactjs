import Home from '../../pages/home/Home'
import Join from '../../pages/join/Join'
import { Route as RouteType } from '../../interface/route.type'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from '../../pages/login/Login';
import Quiz from '../../pages/join/Join';
import PrivateRoute from './PrivateRoute';

const RouteData: RouteType[] = [
    {
        path: '/',
        element: <Home />,
        title: 'home'
    },
    {
        path: '/join',
        element: <Join />,
        title: 'join',
        requiresAuth: true
    },
    {
        path: '/quiz',
        element: <Quiz />,
        title: 'quiz',
        requiresAuth: true
    },
    {
        path: '/login',
        element: <Login />,
        title: 'login'
    },
]

const RoutesApp = () => {
    const renderRoutes = () => {
        return RouteData.map(({ path, element, title, requiresAuth }: RouteType) => {
            if (requiresAuth) {
                return (
                    <Route
                        key={title}
                        path={path}
                        element={<PrivateRoute>{element}</PrivateRoute>}
                    />
                );
            }
            return (
                <Route
                    key={title}
                    path={path}
                    element={element}
                />
            );
        });
    };

    return (
        <Routes>
            {renderRoutes()}
            <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
    );
};

export default RoutesApp;