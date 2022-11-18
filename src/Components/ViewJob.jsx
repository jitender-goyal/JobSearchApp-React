import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EmployerService from '../Service/EmployerService';
import EmployerMenu from './EmployerMenu';
const ViewJob = () => {
    const {jobId} = useParams();
    const [job, setJob] = useState({});

    useEffect(() => {
        EmployerService.getJob(jobId).then(response => {
            setJob(response.data);
            //const jobs=employer.createdJobs
        }).catch(e => console.log("Exception while fetching job info "+e));
    });

    return (
     <div>
        <EmployerMenu />
      <div className="container w-25 pt-5">
        <div className="card">
            <div className="card-header">
                <h4>{job.title}</h4>
            </div>
            <div className="card-body">
                <div className="card-title">
                    <h4>Details</h4>
                </div>
                <div className="card-text">
                    <table>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <th>TITLE:</th>
                                    </tr>
                                    <tr>
                                        <th>JOB ID:</th>
                                    </tr>
                                    <tr>
                                        <th>LOCATION:</th>
                                    </tr>
                                    <tr>
                                        <th>DESCRIPTION:</th>
                                    </tr>
                                    <tr>
                                        <th>SALARY:</th>
                                    </tr>
                                    <tr>
                                        <th>MINIMUM EXPERIENCE:</th>
                                    </tr>
                                    <tr>
                                        <th>NOTICE PERIOD:</th>
                                    </tr>
                                
                                   
                                </table>
                            </td>
                            <td>
                            <table>
                                    <tr>
                                        <td>{job.title}</td>
                                    </tr>
                                    <tr>
                                        <td>{job.jobId}</td>
                                    </tr>
                                    <tr>
                                        <td>{job.location}</td>
                                    </tr>
                                    <tr>
                                        <td>{job.description}</td>
                                    </tr>
                                    <tr>
                                        <td>{job.salary}</td>
                                    </tr>
                                    <tr>
                                        <td>{job.minExperience}</td>
                                    </tr>
                                    <tr>
                                        <td>{job.noticePeriod}</td>
                                    </tr>
                                    
                                    
                                </table>
                            </td>
                        </tr>
                   </table>
                </div>
            </div>
            <div className="card-footer p-2">
                  <a className='btn btn-danger' href="/emp/viewjobs">Go Back</a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default ViewJob;