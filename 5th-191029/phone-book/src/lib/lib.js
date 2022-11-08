import axios from 'axios';

export function getPhones(){
    return axios.get('http://localhost:5000/phones')
}