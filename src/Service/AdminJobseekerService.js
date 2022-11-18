import axios from "axios";
import React from "react";

const apiPath = "http://localhost:9099/jobseekers";

class AdminJobseekerService {

    getJobseekers() {
        return axios.get(apiPath);
    }

    getJobseeker(jsId) {
        return axios.get(apiPath + '/' + jsId);
    }

    saveJobseeker(jobseeker) {
        return axios.post(apiPath + '/', jobseeker);
    }

    deleteJobseeker(jsId) {
        return axios.delete(apiPath + "/" + jsId);
    }

    updateJobseeker(jsId, jobseeker) {
        return axios.put(apiPath + '/' + jsId, jobseeker);
    }


}
export default new AdminJobseekerService;