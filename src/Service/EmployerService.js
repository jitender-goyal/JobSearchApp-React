import axios from "axios";
import React from "react";

const apiPath = "http://localhost:9099/employers";

class EmployerService {

    registerEmployer(employer){
        return axios.post(apiPath , employer);
    }

    saveEmployer(employer) {
        return axios.post(apiPath , employer);
    }

    getEmployer(empId) {
        return axios.get(apiPath + "/" + empId);
    }
    
    editEmployer(empId, employer) {
        return axios.put(apiPath + "/" + empId, employer);
    }

    getJobs(empId) {
       return axios.get(apiPath + "/" + empId + "/jobs");
    }

    getJob(jobId) {
        return axios.get(apiPath + "/jobs/" + jobId);
    }

    saveJob(empId,job) {
        return axios.post(apiPath + "/"+empId+"/jobs", job);
    }

    deleteJob(empId,jobId) {
        return axios.delete(apiPath + "/"+empId+"/jobs/"+jobId);
    }

    editJob(empId,jobId, job) {
        return axios.put(apiPath+"/"+empId+"/jobs/"+jobId, job);
    }

    getJobSeekerByJob(jobId) {
        return axios.get(apiPath+"/jobseekersbyjob/" + jobId);
}
}
export default new EmployerService;