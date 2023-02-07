import NavBar from '../components/general/nav_bar'
import Footer from '../components/general/footer'
import Error404 from '../components/error/errors'
import BannerHeader from '../components/home/banner_header'

function error404 (){

    return (

        <div id="404">
        <BannerHeader />
        <Error404/>
        <Footer />
        <NavBar /> 
        </div>
    )

}

export default error404
