import NavBar from '../components/general/nav_bar'
import Footer from '../components/general/footer'
import Header from '../components/home/banner_header'
import Movie from '../components/movie_db/movies'

function movie_db(){

    return (

        <div id="movie_db">
            <Header/>
            <Movie/>
            <Footer/>
            <NavBar/>
        </div>
    )
}

export default movie_db