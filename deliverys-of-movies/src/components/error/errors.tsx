function error404 (){

    return (

        <div id="404">

            <div className="container-fluid">
            
                {/* 404 Error Text */}
                <div className="text-center">
                    <p className="error mx-auto">404</p>
                    <p className="lead text-gray-800 mb-5">Página no encontrada</p>
                    <p className="text-gray-500 mb-0">Parece que se está accediendo a una página que no existe.</p>
                </div>

            </div>

        </div>
    )

}

export default error404