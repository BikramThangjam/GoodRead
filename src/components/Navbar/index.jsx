
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";

const Navbar = () => {
    const {numberCart} = useSelector((state)=>state)

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
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
            <Link className="navbar-brand" to="/">Good Reads</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/books">Books</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <Link className="btn btn-primary" to="/cart">
                        Cart <span className="badge badge-light">{numberCart}</span>
                    </Link>
                    {
                        loggedIn ? (             
                            <Link 
                                className="btn btn-outline-success my-2 my-sm-0"
                                onClick={onLogoutHandler}
                                to="/login"
                            >
                                Logout       
                            </Link>
                        ) : (
                            <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">Login</Link>
                        )

                    }
                </div>
            </div>
        </nav>
    )
}
export default Navbar;