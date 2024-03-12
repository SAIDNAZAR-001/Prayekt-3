function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-content">
                        <h1 className="footer-content__text">
                            Attend is the Modern Finance <br /> Platform Created for <br /> Physicians, by Physicians
                        </h1>
                    </div>
                    <div className="footer-link">
                        <div className="footer-link__Contact">
                            <p className="footer-link__Contact__starter">Contact</p>
                            <div className="footer-link__Contact__link">
                                <a href="#">contact@helloattend.com</a>
                                <a href="#">New York, NY</a>
                            </div>
                        </div>
                        <div className="footer-link__Company">
                            <p className="footer-link__Company__starter">Company</p>
                            <div className="footer-link__Company__link">
                                <a href="#">Solutions</a>
                                <a href="#">Learn</a>
                                <a href="#">Our Mission</a>
                            </div>
                        </div>
                        <div className="footer-link__Social">
                            <p className="footer-link__Social__starter">Social</p>
                            <div className="footer-link__Social__link">
                                <a href="#">Facebook</a>
                                <a href="#">Instagram</a>
                                <a href="#">Twitter</a>
                                <a href="#">TikTok</a>
                                <a href="#">LinkedIn</a>
                                <a href="#">Reddit</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-sublink">
                        <a href="#">Copyright 2022 Attend</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;