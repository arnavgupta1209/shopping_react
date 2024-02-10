import Home from './Home';
import Shop from './Shop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            component: <Home />
        },
        {
            path: '/shop',
            component: <Shop />
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Router;