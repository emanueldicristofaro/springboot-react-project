import axios from "axios";

const fetchMovie = async (id: string|undefined) => {

    const { data } = await axios.get(`http://localhost:8080/v1.0/movie/${id}`);
    return data
}

export default fetchMovie