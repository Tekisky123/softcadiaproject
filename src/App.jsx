import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./views/Home";
// import JobsPage from './components/jobs/Jobs'
import Job from "./views/JobsPage";
import Login from "./components/login/login";
import TrainingPage from "./views/TrainingPage";
import CareerJobs from "./components/careers/CareerJobs";
import AdminPanel from "./components/Admin/AdminPanel";
import SignUp from "./components/login/signUp";
import CareerTraining from "./components/careers/CareerTrainings";
import UserSignUp from "./components/userlogin/UserSignUp";
import UserSignIn from "./components/userlogin/UserLogin";
// import Navbar from "./components/navbar/NavBar";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  

  return (
    <>
      {currentRoute === "/dashboard/login" ||
      currentRoute === "/dashboard/trainings" ||
      currentRoute === "/dashboard/jobss" || currentRoute === "/signup" || currentRoute === "/dashboard" ? (
        <></>
      ) : (
        <NavBar />
      )}
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<AdminPanel />}>
          <Route path="jobss" element={<Job />} />
          <Route path="trainings" element={<TrainingPage />} />
        </Route>

        <Route path="/dashboard/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/jobs" element={<CareerJobs />} />
        <Route path="/trainingscar" element={<CareerTraining/>}/>
        <Route path="/usersignup" element={<UserSignUp/>} />
        <Route path="/usersignin" element={<UserSignIn/>} />
      </Routes>

     

       {/* {currentRoute === "/dashboard/trainings" ||
      currentRoute === "/dashboard/jobss" ||
      currentRoute === "/dashboard/login" || currentRoute === "/signup" || currentRoute === "/dashboard" ? (
        <></>
      ) : (
        <Footer />
      )} */}
    </>
  );
}

export default App;
