import NavBar from '../components/general/nav_bar'
import Footer from '../components/general/footer'
import Header from '../components/home/banner_header'
import Show from '../components/show_db/shows'

function show_db(){

    return (

        <div id="show_db">
            <Header/>
            <Show/>
            <Footer/>
            <NavBar/>
        </div>
    )
}

export default show_db