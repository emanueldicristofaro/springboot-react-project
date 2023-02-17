import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from "react"
import CommentsInterface from '../../../interfaces/comments'
import CommentsService from '../../../services/comments'
import CommentsServiceDelete from '../../../services/delete_review'
import moment from 'moment'; //Para poder cambiar el formato de las fechas

function deleteComments(){

    const { id } = useParams()
    const [comments, setComments] = useState<Array<CommentsInterface>>([])

    const searchComments = async (id: string|undefined) => {

        const response = await CommentsService(id);
        setComments(response)
    }

    const handleSubmit = (event: any) => {

        event.preventDefault()     
        const id = event.target.id.value
        CommentsServiceDelete(id)
    }

    useEffect(()=>{
        searchComments(id)
    }, [])

    return (

        <div id="deleteComments">

                <div className="card-body">

                        {comments.map((com) => (

                            <div key={com.id}>

                                <form onSubmit={handleSubmit}>
        
                                    <br></br>
                                    <div className="mb-3">
                                    <label className="form-label">ID</label>
                                    <input type="text" className="form-control" id="id" name='id' value={com.id} readOnly/>
                                    </div>
                                    <div className="mb-3">
                                    <label className="form-label">Usuario</label>
                                    <input type="text" className="form-control" id="user" value={com.user} readOnly/>
                                    </div>
                                    <div className="mb-3">
                                    <label className="form-label">Fecha</label>
                                    <input type="text" className="form-control" id="date" value={moment.utc(com.date).format('YYYY-MM-DD')} readOnly/>
                                    </div>
                                    <div className="mb-3">
                                    <label className="form-label">Descripción</label>
                                    <textarea className="form-control" id="description" value={com.description} readOnly></textarea>
                                    </div>
                                    
                                    <input className="btn btn-danger" type="submit" value="Eliminar"/>

                                </form>

                            </div>
                        ))}                     
                </div>     
        </div>
    )

}

export default deleteComments