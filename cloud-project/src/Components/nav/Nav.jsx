import "./Nav.css"
import { Link } from 'react-router-dom';
import gitLogo from '../../assets/git.svg';
function Nav({profile}){
    const unknow = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=128';
    const invitado = 'Invitado';
    return(
    <nav className="Nav">
        <div>
        <a href="https://github.com/4NGEL1" target="_blank">
          <img src={gitLogo} className="git-logo" alt="Git logo" />
        </a>
        </div>
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