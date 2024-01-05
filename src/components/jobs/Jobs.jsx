import { useEffect, useState } from "react";
import style from "./Jobs.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const JobsPage = ({
  register,
  handleSubmit,
  reset,
  setData,
  data,
  setShow,
  show,
  edit,
  setEdit,
  watch,
  errors,
}) => {
  // const [enable , setEnable] = useState(false)
  // useEffect(()=>{

  // } , [refetch])
  const onToast = () => {
    toast.success("Job Added Successfully !", { theme: "dark" });
  };

  const submit = (userdata) => {
    if (edit === false) {
      axios.post("http://localhost:5000/softcadia/job/addnewjob", userdata)
        .then((res) => {
          if (res) {
            setData([...data, res.userdata]);
            
            reset()
              
            //setRefetch(!refetch)
          }
          setShow(false)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (edit === true) {
      axios
        .post(
          `http://localhost:5000/softcadia/job/jobedit/${userdata._id}`,
          userdata
        )
        .then((res) => {
          if (res) {
            setEdit(res.userdata);
            // setRefetch(!refetch)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setEdit(false);
   
  };
  const cancel = () => {
    setShow(!show);
    reset();
  };

  const areFieldsFilled = () => {
    // Check if all the required fields have values
    const {
      title,
      remote,
      employee,
      skills,
      company,
      joblocation,
      summary,
      details,
    } = watch();

    return (
      !!title &&
      !!remote &&
      !!employee &&
      !!skills &&
      !!company &&
      !!joblocation &&
      !!summary &&
      !!details
    );
  };

  // const onDisableButton = () =>{
  //   isbtnenable === true && title , skills , company
  // }

  return (
    <>
      <div className={style.maindiv}>
        <div className={style.seconddiv}>
          Add New
          <hr />
          <form action="" onSubmit={handleSubmit(submit)}>
            <div>
              <label htmlFor="" className={style.label}>
                Title<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :{" "}
              </label>{" "}
              <input
                type="text"
                {...register("title", {
                  required: { value: true, message: "title is required" },
                })}
              />
              <p style={{ color: "red" }}>{errors?.title?.message}</p>
            </div>
            <label htmlFor="" className={style.lable}>
              Remote Options<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
            </label>

            <div className={style.b}>
              <input
                type="radio"
                name="remote"
                value="Remote Only"
                className={style.h}
                {...register("remote")}
              />
              <label htmlFor="" className={style.lables}>
                Remote Only 
              </label>
            </div>
            <br />

            <div className={style.b}>
              <input
                type="radio"
                name="remote"
                value="Exclude Remote"
                className={style.h}
                {...register("remote")}
              />
              <label htmlFor="" className={style.lables}>
                Exclude Remote
              </label>
            </div>
            <br />

            <div className={style.b}>
              <input
                type="radio"
                name="remote"
                value="Work From Home Available"
                className={style.h}
                {...register("remote")}
              />
              <label htmlFor="" className={style.lables}>
                Work From Home Available
              </label>
            </div>
            <br />

            <label htmlFor="" className={style.lable}>
              Employment Type<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :{" "}
            </label>
            <div className={style.b}>
              <input
                type="radio"
                name="employee"
                value="Full-time"
                className={style.h}
                {...register("employee")}
              />
              <label htmlFor="" className={style.lables}>
                {" "}
                Full-time
              </label>
            </div>
            <br />
            <div className={style.b}>
              <input
                type="radio"
                name="emloyee"
                value="Part-time"
                className={style.h}
                {...register("employee")}
              />
              <label htmlFor="" className={style.lables}>
                Part-time
              </label>
            </div>
            <br />
            <div className={style.b}>
              <input
                type="radio"
                name="employee"
                value="Contract"
                className={style.h}
                {...register("employee")}
              />
              <label htmlFor="" className={style.lables}>
                Contract
              </label>
            </div>
            <br />
            <div className={style.b}>
              <input
                type="radio"
                name="employee"
                value="Third Party"
                className={style.h}
                {...register("employee")}
              />
              <label htmlFor="" className={style.lables}>
                Third Party
              </label>
            </div>
            <div className={style.inputss}>
              <label htmlFor="" className={style.lable}>
                Skills<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <input
                type="text"
                name="skills"
                className={style.inpt}
                {...register("skills")}
              />
            </div>
            <br />
            <br />
            <div className={style.inputs}>
              <label htmlFor="" className={style.lable}>
                Company<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <input
                type="text"
                name="company"
                className={style.inpt}
                {...register("company")}
              />
            </div>
            <br />
            <br />
            <div className={style.inputs}>
              <label htmlFor="" className={style.lable}>
                Job Location<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <input
                type="text"
                name="joblocation"
                className={style.inpt}
                {...register("joblocation")}
              />
            </div>
            <br />
            <br />
            <div className={style.inputs}>
              <label htmlFor="" className={style.lable}>
                Summary<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <br />
              <textarea
                name="summary"
                cols="70"
                rows="4"
                className={style.inpt1}
                {...register("summary")}
              ></textarea>
            </div>
            <br />
            <br />
            <div className={style.inputs}>
              <label htmlFor="" className={style.lable}>
                Details<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <br />
              <textarea
                name="details"
                cols="70"
                rows="6"
                className={style.inpt1}
                {...register("details")}
              ></textarea>
            </div>

            <div className={style.btns}>
              <button
                type="submit"
                onClick={onToast}
                className={style.btn}
                disabled={!areFieldsFilled()}
              >
                Submit
              </button>{" "}
              <button
                style={{ background: "red", color: "white" }}
                className={style.btn}
                onClick={cancel}
              >
                &times; Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default JobsPage;

// console.log(userdata)
// console.log(edit)

// axios.post("http://localhost:5000/softcadia/job/addnewjob", userdata);
//   console
//     .log(userdata._id)
//     .then((res) => {
//       setData([...data, res.userdata]);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// axios
// .post(
//   `http://localhost:5000/softcadia/job/jobedit/${userdata._id}`,
//   userdata
// )
// console.log(data)
// .then((res) => {
//   console.log(res)
//   setEdit(res.userdata);
// })
// .catch((err) => {
//   console.log(err);
// });
