import NavBar from '../components/home/nav_bar'
import BannerHeader from '../components/home/banner_header'
import Body from '../components/home/body'
import Footer from '../components/home/footer'

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