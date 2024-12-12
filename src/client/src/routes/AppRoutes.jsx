import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage';
import MembrosPage from '../pages/membros'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< Homepage />} />
            <Route path="/team" element={< MembrosPage />} />
        </Routes>
    );
}; 

export default AppRoutes;