import "./Nav.css"
import { Link } from 'react-router-dom';

function Nav({profile}){
    console.log('Nav');
    console.log(profile);
    const unknow = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=128';
    const invitado = 'Invitado';
    return(
    <nav className="Nav">
        <Link to='/'>
            <button>Login</button>
        </Link>
        <button>{profile ? profile.name : invitado}</button>
        <img className="Image-profile"
        src={profile ? profile.imageUrl : unknow}
        referrerpolicy="no-referrer"></img>
    </nav>);
}

export default Nav;