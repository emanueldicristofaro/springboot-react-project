import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"
import CommentsServicePost from '../../services/post_review'
import CommentsDelete from './subcomponents/delete_comments'
//import { validateAge } from '../form/validates'

function comments(){

    type inputs = {

        user: String,
        date: String,
        description: String,
        delete: Number
    }

    const { id } = useParams()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<inputs>()

    const date = new Date();
    const currentDate = date.toISOString().slice(0, 10) //Formato YYYY-MM-DD

    const formData: SubmitHandler<inputs> = data => {

        CommentsServicePost(data, id)
    }

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
                        <input type="text" className="form-control" id="date" value={currentDate} {...register('date', {
                            required: true
                        })} readOnly/>
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
                <CommentsDelete/>    
            </div>
        </div>
    )

}

export default comments