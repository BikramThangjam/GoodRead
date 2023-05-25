
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
    const {numberCart} = useSelector((state)=>state)
    const navigate = useNavigate();
    const {loggedIn, setLoggedIn} = props
    
    useEffect(()=>{
        let token = localStorage.getItem("token");
        if(!token){
            setLoggedIn(false);
        }else {
            setLoggedIn(true);
        }
    }, [loggedIn] );

    const onLogoutHandler = () => {
        localStorage.removeItem("token");       
        setLoggedIn(false);
        navigate("/login")
    }


    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Good Reads
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0 form-btns">
            <Link className="cart-btn" to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-cart3 cart-icon"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span className="badge badge-danger cart-badge">{numberCart ? numberCart : ""}</span>
            </Link>
            {loggedIn ? (
              <>
                <Link className="profile-icon" to={"/profile"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle"  viewBox="0 0 16 16" style={{color: "white"}}>
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>           
                </Link>
                <Link
                  className="btn btn-outline-success my-2 my-sm-0"
                  onClick={onLogoutHandler}
                  to="/login"
                >
                  Logout
                </Link>
              </>

            ) : (
              <Link
                className="btn btn-outline-success my-2 my-sm-0"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
}
export default Navbar;