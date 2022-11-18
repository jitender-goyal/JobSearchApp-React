import React from 'react';

import Menu from './Menu';

class About extends React.Component {

    render(){
        return  <div className='container'>
                    <div className='conatiner'> 
                        <Menu name="About"/>
                    </div>
                    <div className='container w-50 pt-5'>
                        
                        <p>If employer logins, he can do the following operations</p>
                        <ul>
                            <li>post a job</li>
                            <li>edit a job</li>
                            <li>delete a job</li>
                            <li>view all jobs posted by him</li>
                            <li>he can update his own profile</li>
                        </ul>
                        
                    </div>
                </div>
                
    }


}

export default About;
