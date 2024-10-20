import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { RiServiceFill } from "react-icons/ri";

const Header = () => {
  return (
    <header class={styles.wavyBox} className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-space-around justify-around justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
              <Link to="/">
              <RiServiceFill className="h-16 w-16 "/>
              </Link>
            </li>
            <li>
              <Link to="/">
              <a href="#" className="nav-link px-2 text-white">
                Home
              </a>
              </Link>
            </li>
            <li>
            <Link to="/booking">
              <a href="#" className="nav-link px-2 text-white">
                Booking
              </a>
              </Link>
            </li>
            <li>
            <Link to="/feedback">
              <a href="#" className="nav-link px-2 text-white">
                Feedback
              </a>
              </Link>
            </li>
            <li>
            <Link to="/contactus">
              <a href="#" className="nav-link px-2 text-white">
                ContactUs
              </a>
              </Link>
            </li>
            <li>
            <Link to="/faq">
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </Link>
            </li>
            
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
            <Link to="/signin">
              Login
            </Link>
            </button>
            <button type="button" className="btn btn-primary">
            <Link to="/signup">
              Sign-up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
