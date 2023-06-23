
import '../css/footer-css.css'

export function Footer() {
return (
    <>
        <div style={{ backgroundColor: "black" }} className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li>
                                    <a href="#">Web design</a>
                                </li>
                                <li>
                                    <a href="#">Development</a>
                                </li>
                                <li>
                                    <a href="#">Hosting</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li>
                                    <a href="#">Web design</a>
                                </li>
                                <li>
                                    <a href="#">Development</a>
                                </li>
                                <li>
                                    <a href="#">Hosting</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li>
                                    <a href="#">Company</a>
                                </li>
                                <li>
                                    <a href="#">Team</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 item text">
                            <h3>Furama.com</h3>
                            <p>Visit us for more information and booking our service</p>
                        </div>
                        <div className="col item social">
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fa fa-youtube" />
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fa fa-google" />
                            </a>
                        </div>
                    </div>
                    <p className="copyright">Furama.com © James Truong</p>
                </div>
            </footer>
        </div>

    </>
)
}