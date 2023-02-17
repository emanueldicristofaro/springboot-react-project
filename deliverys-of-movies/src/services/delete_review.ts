import axios from "axios";

const deleteReview = (id: String) => {

    axios.delete(`http://localhost:8080/v1.0/review/${id}/delete`).then(function (response) {

        console.log(response);
        alert('Su comentario a sido borrado con éxito')
      })
      .catch(function (error) {

        console.log(error);
        alert('Ha ocurrido un error')
      });

}

export default deleteReview