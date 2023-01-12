import NavBar from '../components/general/nav_bar'
import Footer from '../components/general/footer'
import Movie from '../components/movie/view_movie'
import Banner from '../components/movie/banner'
import Comments from '../components/movie/comments'

function movie(){

    return(

        <div id="movie">
            <Banner />
            <Movie />
            <Comments/>
            <Footer />
            <NavBar />
        </div>
    )


}

export default movie