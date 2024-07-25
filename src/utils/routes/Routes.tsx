import Home from '../../pages/home/Home'
import Quiz from '../../pages/quiz/Quiz'
import { Route as RouteType } from '../../interface/route.type'
import { Route, Routes } from "react-router-dom";

const RouteData: RouteType[] = [
    {
        path: '',
        element: <Home />,
        title: 'home'
    },
    {
        path: '/quiz',
        element: <Quiz />,
        title: 'quiz'
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