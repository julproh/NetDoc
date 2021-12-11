import axios from "axios";
import {UserInfo} from "../../modules/profile/types";

export default class RestService {

    getInfo = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=10');
        return response.data;
    };

    getUserInfoById = async () => {
        const response = await axios.get('http://localhost:8080/profile')
        return response.data;
    };

    putUserInfoById = async (userInfo: UserInfo) => {
        await axios.post('http://localhost:8080/profile', userInfo)
    }
}
