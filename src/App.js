import './App.css';
import Banner from './Components/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import Info from './Components/Info';
import EmployerRegistration from './Components/EmployerRegistration';
import EmployerHome from './Components/EmployerHome';
import EmployerAbout from './Components/EmployerAbout';
import EmployerInfo from './Components/EmployerInfo';
import AddEmployer from './Components/AddEmployer';
import EditEmployer from './Components/EditEmployer';
import ViewEmployers from './Components/ViewEmployers';
import ViewEmployer from './Components/ViewEmployer';
import DeleteEmployer from './Components/DeleteEmployer';
import AddJobseeker from './Components/AddJobseeker';
import EditJobseeker from './Components/EditJobseeker';
import ViewJobseekers from './Components/ViewJobseekers';
import ViewJobseeker from './Components/ViewJobseeker';
import DeleteJobseeker from './Components/DeleteJobseeker';

import EmployerMenu from './Components/EmployerMenu';
import Login from './Components/Login';
import PostJob from './Components/PostJob';
import ViewJobs from './Components/ViewJobs';
import ViewJob from './Components/ViewJob';
import EditJob from './Components/EditJob';
import DeleteJob from './Components/DeleteJob';
import ViewEmpProfile from './Components/ViewEmpProfile';
import AdminLogin from './Components/AdminLogin';
import JobSeekersByJobId from './Components/JobSeekersByJobId';
import UpdateEmpProfile from './Components/UpdateEmpProfile';
import DeleteEmpProfile from './Components/DeleteEmpProfile';





import JobSeekerLogin from './JSComponent/JobSeekerLogin';
import ShowJobs from './JSComponent/ShowJobs';
import AppliedJobs from './JSComponent/AppliedJobs';
import JobData from './JSComponent/JobData';
import JobSeekerRegistration from './JSComponent/JobSeekerRegistration';
import Homejs from './JSComponent/Homejs';
import Logoutjs from './JSComponent/Logoutjs';



import ApplyJob from './JSComponent/ApplyJob';
import AddToBasket from './JSComponent/AddToBasket';
import BasketJobs from './JSComponent/BasketJobs';
import WithdrawApplication from './JSComponent/WithdrawApplication';
import DeleteBasket from './JSComponent/DeleteBasket';
import JSProfile from './JSComponent/JSProfile';
import UpdateJSProfile from './JSComponent/UpdateJSProfile';
import EmployerProfile from './JSComponent/EmployerProfile';
import HomePage from './HomePage';
import Logout from './Components/Logout';
import DeleteProfile from './JSComponent/DeleteProfile';




function App() {
    const data = {
        title: "Login",
        userName: "username",
        password: "password"
    }
    return (

        <div>
        <Banner/>
        <BrowserRouter >
        <Routes >

                    <Route path = '/adminlogin' element = {<AdminLogin data = { data }/>}></Route >
                    <Route path = '/emp/login' element = {<Login data = { data }/>}></Route >
                    <Route path = '/emp/logout'element = {<Logout/>} > </Route>  
                    <Route path = '/emp/menu'element = {<Menu />} > </Route> 
                    <Route path = '/emp/employermenu'element = {<EmployerMenu />}></Route>  
                    
                    <Route path = '/emp/home'element = { < Home /> } > </Route> 
                   
                    <Route path = '/emp/employerhome'element = {<EmployerHome />} > </Route> 
                    <Route path = '/emp/employerabout'element = {<EmployerAbout />} > </Route> 
                    <Route path = '/emp/employerinfo'element = {<EmployerInfo />} > </Route> 
                   
                    <Route path = '/emp/register'element = { <EmployerRegistration /> } > </Route>  
                    <Route path = '/emp/addemployer'element = {<AddEmployer />} > </Route> 
                    <Route path = '/emp/editemployer/:empId'element = { <EditEmployer /> } > </Route>
                    <Route path = '/emp/deleteemployer/:empId'element = { <DeleteEmployer /> } > </Route>
                    <Route path = '/emp/viewemployers'element = { <ViewEmployers /> } > </Route> 
                    <Route path = '/emp/viewemployer/:empId'element = { < ViewEmployer /> } > </Route> 
                    <Route path = '/emp/addjobseeker'element = { <AddJobseeker /> } > </Route> 
                    <Route path = '/emp/editjobseeker/:jsId'element = { <EditJobseeker /> } > </Route> 
                    <Route path = '/emp/deletejobseeker/:jsId'element = { <DeleteJobseeker /> } > </Route> 
                    <Route path = '/emp/viewjobseekers'element = { <ViewJobseekers/>}></Route>
                    <Route path = '/emp/viewjobseeker/:jsId'element = { < ViewJobseeker /> } > </Route> 

                    <Route path = '/emp/postJob'element = {<PostJob />} > </Route> 
                    <Route path = '/emp/viewJobs'element = {<ViewJobs />} > </Route> 
                    <Route path = '/emp/viewJob/:jobId'element = {<ViewJob />} > </Route> 
                    <Route path = '/emp/updateJob/:jobId'element = {<EditJob />} > </Route> 
                    <Route path = '/emp/deleteJob/:jobId'element = {<DeleteJob />} > </Route> 
                    <Route path = '/emp/viewemployerprofile/:empId'element = { < ViewEmpProfile /> } > </Route> 
                    <Route path = '/emp/jobseekersbyjob/:jobId'element = {<JobSeekersByJobId />} > </Route> 
                    <Route path = '/emp/updateemployerprofile/:empId'element = { < UpdateEmpProfile /> } > </Route> 
                    <Route path = '/emp/deleteemployerprofile/:empId'element = { < DeleteEmpProfile /> } > </Route> 

                    

            
             <Route path = '/js/logoutjs' element = {<Logoutjs/>} > </Route>
             <Route path = '/js/loginjs'  element = { < JobSeekerLogin data = { data }/>}></Route>
             <Route path = '/js/jobs'element = {<ShowJobs/>} > </Route> 
             <Route path = '/js/homejs'  element = {<Homejs/>} > </Route> 
             <Route path = '/js/registerjs' element = {<JobSeekerRegistration/>} > </Route>
             <Route path = '/js/appliedjobs/:id' element = {<AppliedJobs/>} > </Route>
             <Route path = '/js/getbasket/:id' element = {<BasketJobs/>} > </Route>
             <Route path = '/js/jobdata/:id' element = {<JobData/>} > </Route>
             <Route path = '/js/apply/:id/:jid' element = {<ApplyJob/>} > </Route>
             <Route path = '/js/addtobasket/:id/:jid' element = {<AddToBasket/>} > </Route>
             <Route path = '/js/withdrawapplication/:id/:jid' element = {<WithdrawApplication/>} > </Route>
             <Route path = '/js/deletebasket/:id/:jid' element = {<DeleteBasket/>} > </Route>
             <Route path = '/js/jsprofile/:id' element = {<JSProfile/>} > </Route>
             <Route path = '/js/updateseeker/:id' element = {<UpdateJSProfile/>} > </Route>
             <Route path = '/js/deleteprofile/:id' element = {<DeleteProfile/>} > </Route>
             <Route path = '/js/employerprofile/:id' element = {<EmployerProfile/>} > </Route>
             <Route path = '/' element = {<HomePage/>} > </Route>
              </Routes> 
              </BrowserRouter> 
            </div>

        );
    }

    export default App;