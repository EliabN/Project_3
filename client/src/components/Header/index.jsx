import { Link } from 'react-router-dom';
import largeLogo from '../../assets/images/scoresphere-logo.png';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <img src={largeLogo} alt="largeLogo" style={{ width: '345px', height: '95px' }} />
          </Link>
        </div>
        <div className="d-flex align-items-center">
          {Auth.loggedIn() ? (
            <>
              <span className="welcome-message">Hello {Auth.getUser().data.username}!</span>
              <form className="form-inline ml-3">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
              <button className="btn btn-lg btn-light ml-2 btn-sm" onClick={logout}>
                Logout
              </button>
              <Link className="btn btn-lg btn-info ml-2 btn-sm" to="/transfers/team/33">
                Transfer
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info ml-2 btn-sm" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light ml-2 btn-sm" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;