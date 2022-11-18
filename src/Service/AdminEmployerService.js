import axios from "axios";
import React from "react";

const apiPath = "http://localhost:9099/employers";

class AdminEmployerService {

    getEmployers() {
        return axios.get(apiPath);
    }

    getEmployer(empId) {
        return axios.get(apiPath + "/" + empId);
    }

    saveEmployer(employer) {
        return axios.post(apiPath, employer);
    }

    deleteEmployer(empId) {
        return axios.delete(apiPath + "/" + empId);
    }

    editEmployer(empId, employer) {
        return axios.put(apiPath + "/" + empId, employer);
    }


}
export default new AdminEmployerService;