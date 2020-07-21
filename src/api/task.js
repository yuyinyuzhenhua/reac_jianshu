import axios from './axios'

const taskAPI = {
     getTaskList(state = 0){
         return axios.get('/getTaskList', {
             params: {
                 state
             }
         })
     },
     addTask(task, time){
        return axios({
            url: '/addTask',
            method: 'post',
            data: {
                task,
                time
            }
        })
     },
     removeTask(id){
         return axios.get('/removeTask', {
             params: {
                 id
             }
         })
     },
     completeTask(id){
         return axios.get('/completeTask', {
             params: {
                 id
             }
         })
     }
};

export default taskAPI;