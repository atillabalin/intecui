
import React, { useContext } from "react";

const Footer = () => {
    return (
        <div>
            {/* <footer className="footer bg-dark text-center text-white p-3 mt-1 mb-0">
                <p className="display-4">Some footer nonsense!</p>
            </footer> */}
            <footer className="border-top">
                <section className="ft-main">
                    <div className="ft-main-item">
                        <h2 className="ft-title">SNELLE LINKS</h2>
                        <ul>
                            <li><a href="#">Opleidingen</a></li>
                            <li><a href="#">Inschrijven</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Nieuws</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">INTEC BRUSSEL</h2>
                        <p className="lead">Rouppeplein 16 1000 BRUSSEL</p>
                        <p className="lead">info@intecbrussel.be</p>
                        <p className="lead">02/411 29 07</p>
                        <ul>
                            <li><a href="#">Over Ons</a></li>
                            <li><a href="#">Vacatures</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Contact</h2>
                        {/* <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Advertise</a></li>
                        </ul> */}
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Stay Updated</h2>
                        <p>Subscribe to our newsletter to get our latest news.</p>

                    </div>
                </section>


                <section className="ft-social">
                    <ul className="ft-social-list">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                </section>

                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>&copy; 2020 Copyright INTECBRUSSEL.</li>
                    </ul>
                </section>
            </footer>

        </div>
    )
}

export default Footer;