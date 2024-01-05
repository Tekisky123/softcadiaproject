import { useState } from "react";
import JobsPage from "../components/jobs/Jobs";
import TableJobs from "../components/jobs/JobsTable";
import { useForm } from "react-hook-form";


const Job = () => {
  const { register, handleSubmit, reset , formState , watch} = useForm("");
  const {errors }  = formState;
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [edit , setEdit] = useState(false);
  const [refetch , setRefetch] = useState(false)
  //  const [isbtnenable , setBtnEnable] = useState(false);
  //  const [loading, setLoading] = useState(false);
  const Show = () => {
    if (show == false) {
      setShow(true);
    } else if (show == true) {
      setShow(false);
    }
  };
  
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "600",
          fontFamily: "sans-serif",
        }}
      >
        JOBS
      </p>
      <button
        type="button"
        onClick={Show}
        style={{
          background: "#0097e6",
          color: "white",
          height: "40px",
          border: "transparent",
          padding: "5px",
          borderRadius: "8px",
          float: "right",
          marginRight: "5%",
        }}
      >
        ADD NEW
      </button>
      <br />
      <br />
      {show == true && (
        <JobsPage
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
          setData={setData}
          data={data}
          setShow={setShow}
          show={show}
          edit={edit} setEdit={setEdit}
          refetch={refetch}
          setRefetch={setRefetch}
         
          errors={errors}
          watch={watch}
          
         
          
          
        />
      )}

      <TableJobs data={data} setData={setData} edit={edit} setEdit={setEdit}  register={register}
          handleSubmit={handleSubmit}
          reset={reset} setShow={setShow} show={show}  refetch={refetch}
          setRefetch={setRefetch} />

    </>
  );
};
export default Job;
