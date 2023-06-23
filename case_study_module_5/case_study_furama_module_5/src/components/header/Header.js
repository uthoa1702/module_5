
import '../css/css-for-prototype.css';




export function Header() {
    return(
        <>
            <nav
                style={{ backgroundColor: "black", color: "white" }}
                className="navbar navbar-expand-lg  fixed-top"
            >
                <div className="container">
                    <a style={{ color: "white" }} className="navbar-brand" href="#">
                        <img
                            style={{ height: 45, padding: 5, width: 200 }}
                            src="https://www.furama.com/images/LOGOFHI_4C_Reverse.png"
                            alt=""
                        />
                    </a>
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
                                <a style={{ color: "white" }} className="nav-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} className="nav-link" href="#">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}