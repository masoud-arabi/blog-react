import {BrowserRouter } from 'react-router-dom';
import DashboardRoutes from '../../Dashboard/routes/DashboardRoutes';
import PostRoutes from '../../Post/routes/PostRoute';


const AppRouter = () => (
            <BrowserRouter>
                <DashboardRoutes/>
                <PostRoutes/>
            </BrowserRouter>

    );

export default AppRouter;