import React from 'react';

import EmployerMenu from './EmployerMenu';

class EmployerHome extends React.Component {

    render(){
        return  <div className='container'>
                    <div className='conatiner'> 
                        <EmployerMenu name="employerHome"/>
                    </div>
                    <div className='container border rounded w-50 mt-5 pt-5 bg-secondary text-light'>
                        <p>Job search System has two main characters</p>
                        <ol>
                            <li>Employer</li>
                            <li>Job seeker</li>
                            
                        </ol>
                        
                    </div>
                    
                </div>
                
    }


}

export default EmployerHome;
