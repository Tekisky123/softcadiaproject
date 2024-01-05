import { useState } from "react";
import Training from "../components/trainings/Training";
import TableTraining from "../components/trainings/TrainingTable";
import { useForm } from "react-hook-form";

const TrainingPage = () => {
  const { register, handleSubmit, reset, formState, watch } = useForm("");
  const { errors } = formState;
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [refetch, setRefetch] = useState(false);
 
 
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
        Trainings
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
        <Training
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
          setData={setData}
          data={data}
          setShow={setShow}
          show={show}
          edit={edit}
    
          setEdit={setEdit}
          refetch={refetch}
          setRefetch={setRefetch}
          
          errors={errors}
          watch={watch}
          
        />
      )}

      <TableTraining
        data={data}
        setData={setData}
        edit={edit}
        setEdit={setEdit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        setShow={setShow}
        show={show}
        refetch={refetch}
        setRefetch={setRefetch}
      />
    </>
  );
};

export default TrainingPage;
