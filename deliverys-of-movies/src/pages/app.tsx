import '../styles/app.scss'
import Home from './home'
import MovieView from './movie'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function app() {

    return (
        <div className = "app">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movie_view/:id" element={<MovieView />} />
              </Routes>
          </BrowserRouter>   
        </div>
      )
}

export default app
