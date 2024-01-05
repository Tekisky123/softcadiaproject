import { Link, useNavigate } from 'react-router-dom';
import style from './signUp.module.css'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const SignUp = () => {
    const {register , handleSubmit , formState , reset}=useForm("")
    const {errors} = formState;
    const navi = useNavigate()
    const submit = (data) => {
            axios.post("http://localhost:5000/softcadia/login", data).then((res)=>{
                if(res){
                    navi('/dashboard')
    
                }
            }).catch((err)=>{
                alert(err)
            });
    }
    return(
        <>
    
        <div className={style.bgcolor}>
        <div className={style.heading}>
            <h4 >Welcome to SoftCadia Admin Console...🤩🤩</h4>
            <p>{errors?.email?.message || errors?.password?.message} </p>
            <h3>Please Sign-Up...</h3>
        </div>
        <div className={style.form}>
            <form onSubmit={handleSubmit(submit)} >

                <input type="text" placeholder='Enter Your Username' {...register("username" , {required : {value:true , message:"name is required"}})}/>
                <br />
                <br />

                <input type="email" placeholder='Enter Your Email' {...register("email" , {required : {value:true , message:"username is required"},pattern: {
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
                <Button type="submit">Sign Up</Button>
            </form>
            <p>Or <br />
            Click here for <Link to="/dashboard/login" >Login</Link>
            </p>
        </div>
     </div>
        </>
    );
};

export default SignUp;