import axios from 'axios'

const API_URL = 'http://localhost:8080/employees'

class DataService {
     authenticated = false
    retrieveAllEmployees() {
        return axios.get(API_URL);
    }
    addEmployee(emp){
        return axios.post(API_URL,emp)
    }
    updateEmployee(emp){
        return axios.put(API_URL+'/'+emp.id,emp)
    }
}

export default new DataService()
