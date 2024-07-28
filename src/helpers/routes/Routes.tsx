import Home from '../../pages/home/Home'
import Join from '../../pages/join/Join'
import { Route as RouteType } from '../../interface/route.type'
import { Route, Routes } from "react-router-dom";
import Login from '../../pages/login/Login';
import Quiz from '../../pages/join/Join';

const RouteData: RouteType[] = [
    {
        path: '/',
        element: <Home />,
        title: 'home'
    },
    {
        path: '/join',
        element: <Join />,
        title: 'join'
    },
    {
        path: '/quiz',
        element: <Quiz />,
        title: 'quiz'
    },
    {
        path: '/login',
        element: <Login />,
        title: 'login'
    },
]

const RoutesApp = () => {
    const pageRoutes = RouteData.map(({ path, title, element }: RouteType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    })
    
    return (
        <Routes>{pageRoutes}</Routes>
    )
}

export default RoutesApp