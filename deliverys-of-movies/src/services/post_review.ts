import axios from "axios";

type inputs = {

    user: String,
    date: String,
    description: String,
}

const sendReview = (data: inputs, id: string|undefined) => {

    axios.post(`http://localhost:8080/v1.0/review/${id}/post`, data).then(function (response) {

        console.log(response);
        alert('Su comentario a sido enviado con éxito')
      })
      .catch(function (error) {

        console.log(error);
        alert('Ha ocurrido un error')
      });
}

export default sendReview