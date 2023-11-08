// import instance from "./Api";
import axios from 'axios';
const Account = {
    signIn: (username, password, type) => {
        console.log("signin");
        return axios.post('http://ridewizard.pro:9000/api/v1/users/signin', { username: username, password: password, type: type })
    },
    signUp: async({ name, phNo, email, password }) => {
        console.log("signup");
        return await axios({
                method: 'post',
                url: 'http://ridewizard.pro:9000/api/v1/users/signup',
                data: { name, phNo, email, password },
            })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.response;
            });
    }
}

export default Account