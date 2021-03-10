import {BrowserRouter } from 'react-router-dom';
import DashboardRoutes from '../../Dashboard/routes/DashboardRoutes';


const AppRouter = () => (
            <BrowserRouter>
                <DashboardRoutes/>
            </BrowserRouter>

    );

export default AppRouter;