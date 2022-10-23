import axios from 'axios'
import {BASE_URL} from './helpers'

export const getBookByISBN = (isbn) => {
    return axios.get(BASE_URL + `book/${isbn}`);
}