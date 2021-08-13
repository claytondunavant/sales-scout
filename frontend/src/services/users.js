import axios from 'axios'

//base url
const baseURL = 'http://localhost:3001/api/users'

//add user to database
const createNewUser = newUser => {
    const request = axios.post(baseURL, newUser);
    return request.then(response =>  response.data);
}

const users = {
    createNewUser,
}

export default users