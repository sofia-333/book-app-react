import axios from 'axios'
import { BASE_URL, openNotificationWithIcon } from './../utils/helpers'

export const getBookByISBN = (isbn) => {
    return axios.get(BASE_URL + `book/${isbn}`)
        .then((response) => { return response.data; })
        .catch((response) => { openNotificationWithIcon("error", response.message); });
}