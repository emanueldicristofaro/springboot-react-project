import NavBar from '../components/general/nav_bar'
import Footer from '../components/general/footer'
import Movie from '../components/movie/view_movie'
import Banner from '../components/movie/banner'

function movie(){

    return(

        <div id="movie">
            <Banner />
            <Movie />
            <Footer />
            <NavBar />
        </div>
    )


}

export default movie