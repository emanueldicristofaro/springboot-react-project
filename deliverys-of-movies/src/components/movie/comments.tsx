import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import CommentsInterface from '../../interfaces/comments'
import CommentsService from '../../services/comments'

function comments(){

    const { id } = useParams()
    const date = new Date()
    const currentDate: string = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay() //Hay que arreglar
    const [comments, setComments] = useState<Array<CommentsInterface>>([])

    const searchComments = async (id: string|undefined) => {

        const response = await CommentsService(id);
        setComments(response)
    }

    useEffect(()=>{
        searchComments(id)
    }, [])

    return (

        <div id="comments">

            <div className="card mb-3" >
                <div className="card-header bg-primary text-white">
                    Enviar un comentario
                </div>
                <div className="card-body">

                    <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="user"  name="user"/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Fecha</label>
                    <input type="text" className="form-control" id="date"  name="date" value={currentDate} readOnly/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea className="form-control" id="description" name="description"></textarea>
                    </div>
                    
                    <input className="btn btn-primary" type="submit" value="Enviar"/>
                </div>
            </div>
            <div className="card mb-3" >
                <div className="card-header bg-primary text-white">
                    Comentarios
                </div>
                <div className="card-body">

                        {comments.map((com) => (
                            <div key={com.id}>
                            <div className="mb-3">
                            <label className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="user" name="user" value={com.user} readOnly/>
                            </div>
                            <div className="mb-3">
                            <label className="form-label">Fecha</label>
                            <input type="text" className="form-control" id="date" name="date" value={com.date} readOnly/>
                            </div>
                            <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <textarea className="form-control" id="description" name="description" value={com.description} readOnly></textarea>
                            </div>
                            </div>
                        ))}
                        
                    
                </div>
                
            </div>
        </div>
    )

}

export default comments