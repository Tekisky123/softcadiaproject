import { useForm } from "react-hook-form"
import style from "./login.module.css"
import { Button } from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
const {register , handleSubmit , formState , reset}=useForm("")
const {errors} = formState;
const navi = useNavigate()
const submit = (data) => {
        axios.post("http://localhost:5000/softcadia/logincheck" , data).then((res)=>{
            if(res){
                navi('/dashboard')

            }
        }).catch((err)=>{
            alert(err)
        });
}
// "http://localhost:5000/softcadia/login"
return (
    <>
    {/* <h1>Login</h1>
     <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">User Name :</label>
        <input type="email" name="" id="" {...register("username" , {required : {value:true , message:"this field is required"}})} />
        <p style={{color:"red"}}>{errors?.username?.message}</p>
        <br />
        <br />
        <label htmlFor="">Password :</label>
        <input type="password" name="" id=""  {...register("password" , {required : {value:true , message:"this field is required"}})}/>
        <p style={{color:"red"}}>{errors?.password?.message}</p>
        <br />
        <br />
        <button type="submit">Login</button>
     </form> */}

     <div className={style.bgcolor}>
        <div className={style.heading}>
            <h4 >Welcome to SoftCadia Admin Console</h4>
            <p>{errors?.email?.message || errors?.password?.message} </p>
            <h3>Please Sign-In</h3>
        </div>
        <div className={style.form}>
            <form onSubmit={handleSubmit(submit)} >
                <input type="email" placeholder='Enter Your Email'  {...register("email" , {required : {value:true , message:"username is required"},pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Enter Valid Email",
            }})} />
                <br />
                <br />
                <input type="password" placeholder='Enter Your Password' {...register("password" , {required : {value:true , message:"please enter your password"}
            ,
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message: "password must be 6-16 and special character",
            }})} />
                <br />
                <Button type="submit">Sign in</Button>

            </form>

            <p>Or <br />
            Click here for <Link to="/signup">Sign-Up</Link>
            </p>
        </div>
     </div>
    </>
)
}

export default Login