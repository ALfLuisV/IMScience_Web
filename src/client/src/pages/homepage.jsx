import HeaderHP from '../components/Header';
import Eventos from '../components/eventos';
import CarrosselHP from '../components/carrosselHP';
import FooterHP from '../components/footer';
import ArtigosHP from '../components/artigosHP';


const Homepage = () => {
    return (
        <div>
            <CarrosselHP/>
            <ArtigosHP/>
            <Eventos/>
        </div>
    )

}

export default Homepage;