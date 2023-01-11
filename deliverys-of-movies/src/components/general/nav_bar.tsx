import Banner from '../../assets/img/Banner.png'

function navBar(){

    return (

        <div id="navBar">

            <header className="header">
                <nav className="navbar">
                    <div>
                        <img src={Banner} alt="" className="d-inline-block align-text-top" id="logo"/>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default navBar