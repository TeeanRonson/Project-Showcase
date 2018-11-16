
import axios from 'axios';
const root_Url = "http://api";
export const USER_LIST = 'user_list';


/**
 * Get All users on Showcase 
 */
export function getAllUsers() {
    const request = axios.get(`${root_Url}/userlist`)

    return {
        type: USER_LIST,
        payload: request
    };
}