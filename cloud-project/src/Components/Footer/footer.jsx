import './footer.css';
import E from '../../assets/E.svg'
import F from '../../assets/F.svg'
import S from '../../assets/S.svg'
import M from '../../assets/M.svg'
import Spotify from '../../assets/Spotify.svg'
function Footer(){
    return(
        <section className="container">
            <a href="">
                <img src={E} className="letter" alt="E" />
            </a>
            <a href="">
                <img src={S} className="letter" alt="E" />
            </a>
            <a href="">
                <img src={F} className="letter" alt="E" />
            </a>
            <a href="">
                <img src={M} className="letter" alt="E" />
            </a>
        </section>
    );
}

export default Footer;