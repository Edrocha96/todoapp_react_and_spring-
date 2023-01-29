import axios from 'axios';

const TASK_API_BASE_URL = "http://localhost:8080/to-do-app";


class TaskService {

    getTask(){
        return axios.get(TASK_API_BASE_URL + '/all-registers');
    }

    createTask(task){
        return axios.post(TASK_API_BASE_URL + '/save-task', task);
    }

    getTaskById(taskId){
        return axios.get(TASK_API_BASE_URL + '/' + taskId);
    }

    updateTask(task, taskId){
        return axios.put(TASK_API_BASE_URL + '/' + taskId, task);
    }

    deleteTask(taskId){
        return axios.delete(TASK_API_BASE_URL + '/' + taskId);
    }

}

export default new TaskService()