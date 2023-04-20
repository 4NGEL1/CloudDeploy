import "./Nav.css"
import { Link } from 'react-router-dom';
import gitLogo from '../../assets/git.svg';
function Nav({profile}){
    const unknow = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=128';
    const invitado = 'Invitado';
    return(
    <nav className="Nav">
        <div className="git-logo-div">
        <a href="https://github.com/4NGEL1/CloudDeploy" target="_blank">
          <img src={gitLogo} className="git-logo" alt="Git logo" />
        </a>
        </div>
        <Link to='/'>
            <button>Salir</button>
        </Link>
        <Link to='/cloud'>
            <button>Cloud</button>
        </Link>
        <Link to='/iass'>
            <button>IasS</button>
        </Link>
        <Link to='/sass'>
            <button>SasS</button>
        </Link>
        <Link to='/pass'>
            <button>PasS</button>
        </Link>
        <div className="User-card">
            <div className="Image-profile">
                <Link to='/home'>
                <img className="Image-profile-img"
                    src={profile ? profile.imageUrl : unknow}
                    referrerPolicy="no-referrer"></img>
                </Link>
                <p>{profile ? profile.name : invitado}</p>
            </div>
        </div>
    </nav>);
}

export default Nav;