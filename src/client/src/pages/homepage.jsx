import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Eventos from '../components/eventos';
import CarrosselHP from '../components/carrosselHP';
import Footer from '../components/footer';
import ArtigosHP from '../components/artigosHP';


const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <CarrosselHP/>
            <ArtigosHP/>
            <Eventos/>
            <Footer/>
        </div>
    )

}

export default Homepage;