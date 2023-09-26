// import instance from "./Api";
import axios from 'axios';
const Account = {
    signIn: (username, password, type) => {
        console.log("signin");
        return axios.post('http://27.69.251.31:9000/api/v1/users/signin', { username: username, password: password, type: type })
    }
}

export default Account