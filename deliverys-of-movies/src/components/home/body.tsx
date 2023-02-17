import alita from '../../assets/img/portada_alita.jpg'
import it from '../../assets/img/portada_it.jpg'
import padrino from '../../assets/img/portada_padrino.png'
import coraline from '../../assets/img/portada_coraline.jpg'

function body(){

    return(

        <div className="body">
            <div className="card">
                <div className="card-body">
                    
                    <div className="movie card">
                    <img className="card-img-top" src={alita} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"><b>Alita Battle Angel</b></h5>
                        <p className="card-text">Una historia llena de acción sobre el viaje de autodescubrimiento de una 
                        joven que quiere descubrir la verdad sobre quién es y luchar para cambiar el mundo.</p>
                        <p><b>Dirección:</b> Robert Rodríguez</p>
                        <p><b>Reparto principal:</b> Rosa Salazar, Christoph Waltz, Jennifer Connelly</p>
                    </div>
                    <div className="card-body">
                        <a href={`/movie_view/${1}`} className="card-link">Ver película</a>
                    </div>
                    </div>

                    <div className="movie card">
                    <img className="card-img-top" src={it} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"><b>IT (2017)</b></h5>
                        <p className="card-text">En el verano de 1989, un grupo de niños víctimas de acoso escolar se une para destruir a un monstruo que cambia de forma, 
                        que se disfraza de payaso y se aprovecha de los niños de Derry, su pequeña ciudad de Maine.</p>
                        <p><b>Dirección:</b> Andy Muschietti</p>
                        <p><b>Reparto principal:</b> Bill Skarsgård, Jaeden Martell, Finn Wolfhard, Sophia Lillis</p>
                    </div>
                    <div className="card-body">
                        <a href={`/movie_view/${2}`} className="card-link">Ver película</a>
                    </div>
                    </div>

                    <div className="movie card">
                    <img className="card-img-top" src={padrino} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"><b>El padrino</b></h5>
                        <p className="card-text">El envejecido patriarca de una dinastía del crimen 
                        organizado en la ciudad de Nueva York de la posguerra transfiere el control de su imperio clandestino a su reacio hijo menor.</p>
                        <p><b>Dirección:</b> Francis Ford Coppola</p>
                        <p><b>Reparto principal:</b> Marlon Brando, Al Pacino, James Caan, Diane Keaton, Robert Duvall</p>
                    </div>
                    <div className="card-body">
                        Próximamente
                    </div>
                    </div>

                    <div className="movie card">
                    <img className="card-img-top" src={coraline} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"><b>Coraline</b></h5>
                        <p className="card-text">Una aventurera niña de 11 años encuentra otro mundo que es una versión 
                        extrañamente idealizada de su frustrante hogar, pero que tiene siniestros secretos.</p>
                        <p><b>Dirección:</b> Henry Selick</p>
                        <p><b>Reparto principal:</b> Dakota Fanning, Teri Hatcher, John Hodgman, Jennifer Saunders</p>
                    </div>
                    <div className="card-body">
                        <a href={`/movie_view/${3}`} className="card-link">Ver película</a>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default body