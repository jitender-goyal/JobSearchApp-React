import axios from "axios";
import React from "react";

const apiPath = "http://localhost:9099/jobseekers/";

class JobService {
    getjobseeker(id){
        return axios.get(apiPath+id)
    }
    registerSeeker(seeker){
        return axios.post(apiPath,seeker);
    }
    getJobs(){
        return axios.get(apiPath+'jobs');
    }
    getAppliedJobs(id){
        return axios.get(apiPath+id+'/appliedjobs');
    }
    getJob(id){
        return axios.get(apiPath+'jobs/'+id);
    }
    applyJob(id,jid){
        return axios.put(apiPath+id+"/applytojobs/"+jid);
    }
    addtoBasket(id,jid){
        return axios.put(apiPath+id+"/basketjobs/"+jid);
    }
    getBasket(id){
        return axios.get(apiPath+id+"/basketjobs");
    }
    withdrawApplication(id,jid){
        return axios.delete(apiPath+id+"/withdrawfromjobs/"+jid);
    }
    deleteBasket(id,jid){
        return axios.delete(apiPath+id+"/deletebasketjobs/"+jid); 
    }
    getEmployer(id){
        return axios.get('http://localhost:9099/employers/'+id)
    }
    updateSeeker(seeker){
        return axios.put(apiPath+localStorage.getItem("jsId"),seeker);
    }
    getApplicationStatus(id,jid){
        return axios.get(apiPath+id+'/jobapplstatus/'+jid);
    }
    deleteProfile(id){
        return axios.delete(apiPath+id); 
    }


}
export default new JobService;