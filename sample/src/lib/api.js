import axios from 'axios';

export function getPhones(){
    return axios.get('http://localhost:5000/phones')
}

export function updatePhone(param){
    return axios({
        method: 'post',
        url : 'http://localhost:5000/updatePhone',
        data: param
    })
}
export function insertPhone(param){
    return axios({
        method: 'post',
        url : 'http://localhost:5000/insertPhone',
        data: param
    })
}

export function deletePhone(_id){

    /*
    {
        id: 3,
        name: 김태성,
        phone: 01049378022
    }

    3
    */
    let temp = {id:-1}
    temp.id = _id

    return axios({
        method: 'post',
        url : 'http://localhost:5000/deletePhone',
        data: temp
    })
}