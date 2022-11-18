const HomePage=()=>{
    return (<div className='mainLogin d-flex flex-column p-5'>
                
                    <h4 className=" text-center">Are you looking for a job?</h4>
                       <a href='/js/loginjs' className='btn btn-danger d-grid gap-2 col-6 mx-auto' > Click Here</a><br></br>
                    
                       <h4 className=" text-center">Are you hiring?</h4>
                      <a href='/emp/login' className='btn btn-danger d-grid gap-2 col-6 mx-auto ' >Click Here</a> <br></br><br/>
                    
                    
                     <a href='/adminlogin' className='btn btn-danger d-grid gap-2 col-6 mx-auto' >Admin Login</a><br></br>
                    
                
            </div>)

}

export default HomePage;