import Banner from '../../assets/img/Banner.png'
import { NavLink } from "react-router-dom";

function navBar(){

    return (

        <div id="navBar">

            <header className="header">
                <nav className="navbar">
                    <div>
                        <img src={Banner} alt="" className="d-inline-block align-text-top" id="logo"/>
                    </div>
                    <div className="menu">
                        <li><NavLink to={`/`}>Inicio</NavLink></li>
                        <li><NavLink to={`/movie_db/`}>Películas</NavLink></li>
                        <li><NavLink to={`/show_db/`}>Series</NavLink></li>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default navBar