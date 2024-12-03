import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage';
import Header from '../components/Header';
import Eventos from '../components/eventos';
import CarrosselHP from '../components/carrosselHP';
import Footer from '../components/footer';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< Homepage />} />
        </Routes>
    );
}; 

export default AppRoutes;