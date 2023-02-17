import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Info_TMDB from "../../assets/img/tmdb_info.png"
import fetchShows from "../../services/show_db"
import Show from "../../interfaces/show_db"

export default function Movies(){

    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/'
    const [shows, setShow] = useState<Array<Show>>([])

    const listShows = async () => {

        const response = await fetchShows()
        setShow(response)
    }

    useEffect(()=>{
        listShows()
    }, [])

    return (  

        <div id="primary">

            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-header">
                        Series populares
                    </div>
                    <div className="card-body">

                        <Carousel>
                            {shows.map((sho) =>(
                            <Carousel.Item key={sho.id}>
                                
                                <img src={`${IMAGE_PATH + sho.poster_path}`} alt="" height={700} width="100%"/>
                                <div className="card">
                                    <div className="card-body">
                                        <h5>{sho.name}</h5>
                                        <p>⭐{sho.vote_average}</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            ))}
                        </Carousel>
                        
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            Información de interés
                        </div>
                        <div className="card-body">
                            <h1>TMDB</h1>
                            <p>La base de datos de películas (TMDB) es una base de datos de películas y TV creada por la comunidad. Cada pieza de datos ha sido agregada por nuestra increíble comunidad desde 2008. El fuerte enfoque internacional y la amplitud de datos de TMDB son en gran medida incomparables y es algo de lo que estamos increíblemente orgullosos. En pocas palabras, 
                            vivimos y respiramos en comunidad y eso es precisamente lo que nos hace diferentes.</p>
                            <a href="https://www.themoviedb.org/">Ingresar aquí</a>
                            <br></br>
                            <br></br>
                            <div className="info-image">
                                <img src={Info_TMDB} width="100%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}