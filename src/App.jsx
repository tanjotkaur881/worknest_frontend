import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Component/ScrollToTop'
import Index from './Component/Index';
import Employerlogin from './Component/Employerlogin'
import Employerregister from './Component/Employerregister'
import Mainlogin from './Component/Mainlogin';
import Workerlogin from './Component/Workerlogin';
import Workerregister from './Component/Workerregister';
import AboutUs from './Component/AboutUs';
import Static from './Component/Static';
import Worker from './Component/Worker';
import Mediaandcoverage from './Component/Mediaandcoverage';
import Sidebarworker from './Component/Sidebarworker';
import Sidebaremployer from './Component/Sidebaremployer';
import { ToastContainer} from 'react-toastify';
import EmployerProfile from './Component/EmployerProfile';
import WorkerProfile from './Component/WorkerProfile';
import EmployerChangePassword from './Component/EmployerChangePassword';
import WorkerchangePassword from './Component/Workerchangepassword';
import WorkerEditProfile from './Component/WorkerEditProfile';
import ContactUsPage from './Component/ContactUsPage';
import Alljobs from './Component/Alljobs';
import Findbysearch from './Component/Findbysearch'
import Reviews from './Component/Reviews'
import Viewrequest from './Component/Viewrequest';
import News from './Component/News';

function App() {
  
  return (
    <>

    <ToastContainer/>
<ScrollToTop />
{/* <BrowserRouter> */}
<Routes>
  
<Route path='/'element={<Index/>} />
<Route path='/Employerlogin'element={<Employerlogin />} />
<Route path='/Employerregister'element={<Employerregister/>} />
<Route path='/Workerlogin'element={<Workerlogin/>} />
<Route path='/Workerregister'element={<Workerregister/>} />
<Route path='/Mainlogin' element={ <Mainlogin /> } />
<Route path='/AboutUs' element={ <AboutUs /> } />
<Route path='/Worker' element={ <Worker /> } />
<Route path='/Mediaandcoverage' element={ <Mediaandcoverage /> } />
<Route path='/Sidebarworker' element={ <Sidebarworker /> } />
<Route path='/Sidebaremployer' element={ <Sidebaremployer /> } />
<Route path='/employerProfile' element={ <EmployerProfile /> } />
<Route path='/workerProfile' element={ <WorkerProfile /> } />
<Route path='/Employerchangepassword' element={ <EmployerChangePassword /> } />
<Route path='/Workerchangepassword' element={ <WorkerchangePassword /> } />
<Route path='/workerEditprofile' element={ <WorkerEditProfile /> } />
{/* <Route path='/Contactus' element={ <Contactus /> } /> */}
<Route path='/ContactUsPage' element={ <ContactUsPage/> } />
<Route path='/Alljobs' element={ <Alljobs/> } />
<Route path='/Findbysearch/:cat' element={ <Findbysearch/> } />
<Route path='/reviews' element={ <Reviews/> } />
<Route path='/Viewrequest' element={ <Viewrequest/> } />
<Route path='/News' element={ <News/> } />



</Routes>

    </>
  )
}

export default App
