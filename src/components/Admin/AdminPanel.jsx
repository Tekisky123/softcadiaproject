import { Link, Outlet } from "react-router-dom";
import style from "./AdminPanel.module.css";
import { Button } from "react-bootstrap";
import { useState } from "react";


const AdminPanel = () => {

// ShowJob === true && <></>
    // const [ShowJob , setShowJob] = useState(false)

// const ShowJob = () => {

// }
// const [Show , setShow] = useState(false);

//   {Show === true && <JobsPage/>}

  return (
    <>
      <Button style={{ marginTop: "5vh", marginLeft: "5vw" }} >
        <Link
          to="jobss"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Jobs 
        </Link>
      </Button>

      <Button style={{ marginTop: "2vh", marginLeft: "80vw" }}>
        <Link
          to="trainings"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Trainings 
        </Link>
      </Button>

      <Outlet />
    </>
  );
};

export default AdminPanel;
