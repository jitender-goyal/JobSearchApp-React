import photo from '../images/profile_pic.jpg'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminEmployerService from '../Service/AdminEmployerService';
import Menu from './Menu';
const ViewEmployer = () => {
    const {empId} = useParams();
    const [employer, setEmployer] = useState({});

    useEffect(() => {
        AdminEmployerService.getEmployer(empId).then(response => {
            setEmployer(response.data);
            //const jobs=employer.createdJobs
        }).catch(e => console.log("Exception while fetching employee info "+e));
    });



    return (
     <div>
        <Menu />
      <div className="container w-25 pt-5">
        <div className="card">
            <div className="card-header">
                <h4>{employer.empName}</h4>
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
                                    
                                </table>
                            </td>
                            <td>
                            <table>
                                    <tr>
                                        <td>{employer.empId}</td>
                                    </tr>
                                    <tr>
                                        <td>{employer.empName}</td>
                                    </tr>
                                    <tr>
                                        <td>{employer.empEmail}</td>
                                    </tr>
                                    <tr>
                                        <td>{employer.empContactNo}</td>
                                    </tr>
                                    <tr>
                                        <td>{employer.area}, {employer.district}, {employer.state}, {employer.pincode}</td>
                                    </tr>
                                   
                                </table>
                            </td>
                        </tr>
                   </table>
                </div>
            </div>
            <div className="card-footer p-2">
                  <a className='btn btn-danger' href="/emp/viewemployers">Go Back</a>
            </div>
        </div>
      </div>
      
    </div>
  );
}
export default ViewEmployer;