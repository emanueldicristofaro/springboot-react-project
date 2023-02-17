import '../styles/app.scss'
import Home from './home'
import MovieView from './movie'
import MovieDB from './movie_db'
import ShowDB from './show_db'
import Error404 from './404'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function app() {

    return (
        <div className = "app">
          <BrowserRouter>
              <Routes> 
                <Route path="/movie_view/:id" element={<MovieView />} />
                <Route path="/movie_db/" element={<MovieDB/>} />
                <Route path="/show_db/" element={<ShowDB/>} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
          </BrowserRouter>   
        </div>
      )
}

export default app
