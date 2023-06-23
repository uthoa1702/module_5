
import '../css/css-for-prototype.css'







export function SlideHome() {
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
        <header>
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div
                        className="carousel-item active"
                        style={{
                            backgroundImage:
                                'url("https://phuquoc.intercontinental.com/uploads/phuquoc/homepage/Sunset%20View%20from%20Resort%20%26%20Ombra%20-%2016x9.jpg")'
                        }}
                    >
                        <div className="carousel-caption">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div
                        className="carousel-item"
                        style={{
                            backgroundImage:
                                'url("https://mybeautifuladventures.com/wp-content/uploads/2021/09/viceroy-bali-main-pool-evening.jpg")'
                        }}
                    >
                        <div className="carousel-caption">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div
                        className="carousel-item"
                        style={{
                            backgroundImage:
                                'url("https://www.ourtravelmix.com/wp-content/uploads/2022/11/Luxury-Resorts-Rarotonga.jpg")'
                        }}
                    >
                        <div className="carousel-caption">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </header>

    </>
)
}