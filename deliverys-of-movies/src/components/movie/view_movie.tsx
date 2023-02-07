import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import MovieService from '../../services/movie'

function viewMovie(){

    const { id } = useParams()
    const [movie, setMovie] = useState<any>({})

    const searchMovie = async (id: string|undefined) => {

        const response = await MovieService(id)
        setMovie(response)
    }

    /*useEffect(()=>{
        searchMovie(id)
    }, [])*/

    return (

        <div id="view_movie">

            <div className="card">
                <div className="card-body">           
                    <div className="card">
                        <video src={movie.path} width="100%" height={650} controls/>
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie.description}</p>
                            <p>Puntación:⭐ {movie.average}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default viewMovie