import axios from 'axios';

// Call our back end api to get list
export const getToDoList = (url) => {
    return axios.get(url);
};
export  const addTodoTask = data =>{
    const url = "http://localhost:8080/api/task";
    return axios.post(url,data)
};

export  const removeTodoTask = id =>{
    const url = "http://localhost:8080/api/task/";
    console.log(`${url}${id}`);
    return axios.delete(`${url}${id}`)
};