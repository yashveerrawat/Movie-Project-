import { useGlobalContext } from "./contex";

const Header = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark  "
      aria-label="Eighth navbar example"
    >
      <div className="container">
        <a className="navbar-brand Netflixlogo" href="#">
          Netflix.com
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Hollywood
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bollywood
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled Animationlogo"
                aria-disabled="true"
              >
                Animation
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle Categorylogo"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sci-Fiction
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Horror
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form role="search" action="#" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control SearchBar"
              type="search"
              placeholder="Search Your Favourite Movies here..."
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
      <button type="button" className="btn btn-primary signup">
        Login / signup
      </button>
    </nav>
  );
};
export default Header;
