import "./Nav.css"
import { Link } from 'react-router-dom';

function Nav({profile}){
    const unknow = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=128';
    const invitado = 'Invitado';
    return(
    <nav className="Nav">
        <Link to='/'>
            <button>Login</button>
        </Link>
        <Link>
            <button>Card</button>
        </Link>
        <div className="User-card">
            <div className="Image-profile">
                <img className="Image-profile-img"
                    src={profile ? profile.imageUrl : unknow}
                    referrerPolicy="no-referrer"></img>
                <p>{profile ? profile.name : invitado}</p>
            </div>
        </div>
    </nav>);
}

export default Nav;