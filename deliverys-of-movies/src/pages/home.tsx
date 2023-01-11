import NavBar from '../components/general/nav_bar'
import BannerHeader from '../components/home/banner_header'
import Body from '../components/home/body'
import Footer from '../components/general/footer'

function home(){

  return (

        <div id="home">
        <BannerHeader />
        <Body />
        <Footer />
        <NavBar />        
        </div>

  )
}

export default home