import '../styles/app.css'
import Home from './home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function app() {

    return (
        <div className = "app">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
          </BrowserRouter>   
        </div>
      )
}

export default app
