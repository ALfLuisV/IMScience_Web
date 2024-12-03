import { useNavigate } from 'react-router-dom';
import HeaderHP from '../components/Header';
import Eventos from '../components/eventos';
import CarrosselHP from '../components/carrosselHP';
import Footer from '../components/footer';
import ArtigosHP from '../components/artigosHP';


const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <HeaderHP/>
            <CarrosselHP/>
            <ArtigosHP/>
            <Eventos/>
            <Footer/>
        </div>
    )

}

export default Homepage;