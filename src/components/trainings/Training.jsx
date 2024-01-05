import axios from 'axios';
import style from './Training.module.css'
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Training = ({
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


  const submit = (userdata) => {
  
    
    if (edit === false) {
      
      axios.post("http://localhost:5000/softcadia/training/addnewtraining", userdata);
      console.log(userdata._id)
      .then((res) => {
           if(res){
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
          `http://localhost:5000/softcadia/training/trainingedit/${userdata._id}`,
          userdata
        )
        .then((res) => {
          if(res){
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


  const onToast=()=>{
    toast.success("Training Added Successfully!" , {theme:"dark"} )
  
  }
  const areFieldsFilled = () => {
    // Check if all the required fields have values
    const {  title , offered , location , duration , details , date , summary , trainingdetail
    } = watch();
  
    return !!title && !!offered  && !!location && !!duration && !!details && !!date && !!summary && !!trainingdetail;
  };
  
  return(
    <>
    <div>
      <div>
         <h2 style={{textAlign:"center"}}>Add New</h2>
        <hr />
        
        <form action="" onSubmit={handleSubmit(submit)} className={style.form}>
            <div>
              <label htmlFor="" className={style.label}>
                Title<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <input type="text" {...register("title" , {required : {value:true , message:"title is required"}})}  />
              <p style={{color:"red"}}>{errors?.title?.message}</p>
            </div>
            <label htmlFor="" className={style.lable}>
              Training offerred By<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
            </label>

            <div className={style.b}>
              <input
                type="text"
                name="offered"
               
                className={style.h}
                {...register("offered")}
              />
              
              
            </div>
            <br />

            <label htmlFor="" className={style.lable}>
              Training Location<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :{" "}
            </label>
            <div className={style.b}>
              <input
                type="text"
                name="location"
                
                className={style.h}
                {...register("location")}
              />
              
            </div>
            <div className={style.inputss}>
              <label htmlFor="" className={style.lable}>
                Duration<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <input
                type="text"
                name="duration"
                className={style.inpt}
                {...register("duration")}
              />
            </div>
            <br />
            <br />
            <div className={style.inputs}>
              <label htmlFor="" className={style.lable}>
                Trainer Details<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <input
                type="text"
                name="details"
                className={style.inpt}
                {...register("details")}
              />
            </div>
            <br />
            <br />
            <div className={style.inputs}>
              <label htmlFor="" className={style.lable}>
                Training Start date<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <input
                type="text"
                name="date"
                className={style.inpt}
                {...register("date")}
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
                Details of Training<sup style={{color:'red',fontSize:'15px' , fontWeight:"800"}}>*</sup> :
              </label>
              <br />
              <textarea
                name="trainingdetail"
                cols="70"
                rows="6"
                className={style.inpt1}
                {...register("trainingdetail")}
              ></textarea>
            </div>

            <div className={style.btns}>
              <button
                type="submit"
                 onClick={onToast}
                className={style.btn}
                disabled={ !areFieldsFilled() }
        
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
    <ToastContainer/>
    </>
  )
};

export default Training;