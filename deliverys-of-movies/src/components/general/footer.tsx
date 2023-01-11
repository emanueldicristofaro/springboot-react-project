import Banner from '../../assets/img/Banner.png'

function footer(){

    return (

        <div className="footer">

            <footer className="footer-distributed">

            <div className="footer-left">

                <h1 className="logo"><img src={Banner} alt="Delivery's of Movies logo"/></h1>

                <p className="footer-company-name">Delivery's of Movies © 2023</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Caracas, Venezuela 🇻🇪</span></p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+58 424 999-9999</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="#s">support@deliverysofmovies.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">

                    <span>Sobre la página</span>

                    Podrá ver las mejores películas disponibles.
                </p>

            </div>

            </footer>

        </div>
    )


}

export default footer