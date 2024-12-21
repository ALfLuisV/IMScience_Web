import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage';
import MembrosPage from '../pages/membros'
import AppLayout from '../components/appLayout';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Homepage />} />
                <Route path="/team" element={< MembrosPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;