import axios from "axios";
import CommentsInterface from '../interfaces/comments'

const fetchComments = async (id: string|undefined) => {

    const { data } = await axios.get(`http://localhost:8080/v1.0/review/${id}`);
    return data as CommentsInterface[]
}

export default fetchComments