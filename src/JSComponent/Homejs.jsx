import React from 'react';
import JobsMenu from '../JSComponent/JobsMenu';



class Homejs extends React.Component {

    render(){
        return  <div className='container'>
                    <div className='container'> 
                    <JobsMenu name="Home" />
                    </div>
                    <div className='container border rounded w-50 mt-5 pt-5 bg-secondary text-light'>
                        <p><h3>Welcome</h3>
                            <br></br>
                            Grow your career and get the job of your choice
                            
                        </p>
                        <ul>
                            
                        </ul>
                    </div>
                </div>
                
    }


}

export default Homejs;
