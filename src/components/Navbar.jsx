import "bootstrap/dist/js/bootstrap";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom border-body prevent_select"
        style={{ backgroundColor: "#212529" }}
        data-bs-theme={"dark"}
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Entertainix</span>
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
                <a className="nav-link" aria-current="page" href="/trending">
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
                      Top Rated Films
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
                    <a className="dropdown-item" href="/discover-tv">
                      Discover TV Shows
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/top-rated-tv">
                      Top Rated TV Shows
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/search">
                  Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
