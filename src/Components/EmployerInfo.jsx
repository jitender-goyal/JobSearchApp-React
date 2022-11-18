import React from 'react';

import EmployerMenu from './EmployerMenu';

class EmployerInfo extends React.Component {

    render(){
        return  <div className='container'>
                    <div className='conatiner'> 
                        <EmployerMenu name="EmployerInfo"/>
                    </div>
                    <div className='container w-50 pt-5'>
                        
                        
                        <p>If Job seeker logins, he can do the following operations</p>
                        <ul>
                            <li>view all jobs</li>
                            <li>add favorite jobs to basket</li>
                            <li>remove specific job from basket</li>
                            <li>view all jobs present in basket</li>
                            <li>apply for a job</li>
                            <li>he can update his own profile</li>
                        </ul>
                    </div>
                </div>
                
    }


}

export default EmployerInfo;
