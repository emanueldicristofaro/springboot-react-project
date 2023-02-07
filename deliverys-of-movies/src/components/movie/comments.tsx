import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CommentsInterface from '../../interfaces/comments'
import CommentsService from '../../services/comments'
import CommentsServicePost from '../../services/post_review'
//import { validateAge } from '../form/validates'

function comments(){

    type inputs = {

        user: String,
        date: String,
        description: String,
    }

    const { id } = useParams()
    const [comments, setComments] = useState<Array<CommentsInterface>>([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm<inputs>()

    const searchComments = async (id: string|undefined) => {

        const response = await CommentsService(id);
        setComments(response)
    }

    const formData: SubmitHandler<inputs> = data => {

        CommentsServicePost(data, id)
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

                    {/*
                    <p>User: {watch('user')}</p>
                    */}

                    <form onSubmit={handleSubmit(formData)}>

                        <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="user" {...register('user', {
                            required: true
                        })}/>
                        {errors.user?.type === 'required' && <span>Este campo es requerido</span>}
                        </div>

                        {/*
                        <div className="mb-3">
                        <label className="form-label">Correo electrónico</label>
                        <input type="text" className="form-control" id="email" {...register('email', {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                        })}/>
                        {errors.email?.type === 'required' && <span>Este campo es requerido</span>}
                        {errors.email?.type === 'pattern' && <span>El formato del correo no es valido</span>}
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Edad (Colocar entre 18 o 70 años)</label>
                        <input type="number" className="form-control" id="age" {...register('age', {
                            required: true,
                            validate: validateAge
                        })}/>
                        {errors.age?.type === 'required' && <span>Este campo es requerido</span>}
                        {errors.age?.type === 'validate' && <span>La edad sobrepasa lo establecido</span>}
                        </div>
                        */}

                        <div className="mb-3">
                        <label className="form-label">Fecha</label>
                        <input type="date" className="form-control" id="date" {...register('date', {
                            required: true
                        })}/>
                        {errors.date?.type === 'required' && <span>Este campo es requerido</span>}
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <textarea className="form-control" id="description" {...register('description',  {
                            required: true
                        })}></textarea>
                        {errors.description?.type === 'required' && <span>Este campo es requerido</span>}
                        </div>

                        <input className="btn btn-primary" type="submit" value="Enviar"/>

                    </form>
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