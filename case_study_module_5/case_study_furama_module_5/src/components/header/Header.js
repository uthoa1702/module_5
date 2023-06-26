
import '../css/css-for-prototype.css';
import {Link} from "react-router-dom";




export function Header() {
    return(
        <>
            <nav
                style={{ backgroundColor: "black", color: "white" }}
                className="navbar navbar-expand-lg  fixed-top"
            >
                <div className="container">
                    <Link style={{ color: "white" }} className="navbar-brand" to="/">
                        <img
                            style={{ height: 45, padding: 5, width: 200 }}
                            src="https://www.furama.com/images/LOGOFHI_4C_Reverse.png"
                            alt=""
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link style={{ color: "white" }} className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link" to="/customers">
                                    Customers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link" to="/addService">
                                    Add Service
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: "white" }} className="nav-link" to="/contracts">
                                    Contract
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}