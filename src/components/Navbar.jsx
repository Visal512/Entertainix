import "bootstrap/dist/js/bootstrap";

const Navbar = () => {
  return (
    <nav
      className="navbar bd-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 prevent_select">
          entertainix
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/trending" className="nav-link">
                Trending
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Films
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/discover-films">
                    Discover Films
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/top-rated-films">
                    Top Rated Film
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TV Shows
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/discover-tv-shows">
                    Discover TV Shows
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/top-rated-tv-shows">
                    Top Rated TV Shows
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/search" className="nav-link">
                Search
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
