import photo from '../images/profile_pic.jpg'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminJobseekerService from '../Service/AdminJobseekerService';
import Menu from './Menu';
const ViewJobseeker = () => {
    const {jsId} = useParams();
    const [jobseeker, setJobseeker] = useState({});

    useEffect(() => {
        AdminJobseekerService.getJobseeker(jsId).then(response => {
            setJobseeker(response.data);
        }).catch(e => console.log("Exception while fetching jobseeker info "+e));
    });

    return (
     <div>
        <Menu />
      <div className="container w-25 pt-5">
        <div className="card">
            <div className="card-header">
                <h4>{jobseeker.jsName}</h4>
            </div>
            <div className="card-body">
                <img src={photo} alt="photo" className="card-img-top rounded-circle employee-photo" />
                <div className="card-title">
                    <h4>Details</h4>
                </div>
                <div className="card-text">
                    <table>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <th>ID:</th>
                                    </tr>
                                    <tr>
                                        <th>NAME:</th>
                                    </tr>
                                    <tr>
                                        <th>EMAIL:</th>
                                    </tr>
                                    <tr>
                                        <th>PHONE:</th>
                                    </tr>
                                    <tr>
                                        <th>ADDRESS:</th>
                                    </tr>
                                    <tr>
                                        <th>SKILL SETS:</th>
                                    </tr>
                                    <tr>
                                        <th>APPLIED JOBS:</th>
                                    </tr>
                                    
                                </table>
                            </td>
                            <td>
                            <table>
                                    <tr>
                                        <td>{jobseeker.jsId}</td>
                                    </tr>
                                    <tr>
                                        <td>{jobseeker.jsName}</td>
                                    </tr>
                                    <tr>
                                        <td>{jobseeker.jsEmail}</td>
                                    </tr>
                                    <tr>
                                        <td>{jobseeker.jsContactNo}</td>
                                    </tr>
                                    <tr>
                                        <td>{jobseeker.area},{jobseeker.district},{jobseeker.state},{jobseeker.pincode}</td>
                                    </tr>
                                    <tr>
                                        <td>hi</td>
                                    </tr>
                                    <tr>
                                        <td>hlo</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                   </table>
                </div>
            </div>
            <div className="card-footer p-2">
                  <a className='btn btn-danger' href="/emp/viewjobseekers">Go Back</a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default ViewJobseeker;