import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginError, setlogInError] = useState('')
    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const handleLogin= ()=>{

    }

    const handleGoogleSignIn =()=>{
        // googleSignin()
        // .then(result=>{
        //     const user = result.user;
        //     setLoginUserEmail(user.email)
        //     console.log(user);
        //     saveUser(user?.displayName, user?.email)
        //     toast.success('Login Successfully');
        // })
        // .catch(error=>console.log(error))
    };

    return (
        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                   <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Email</span></label>
                   <input type='email'
                    {...register("email",{
                        required:"email address is required"
                    })}
                    
                    className='input input-bordered w-full' />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                   </div>
                   <div className='form-control w-full max-w-xs'>
                   <label className='label'><span className='label-text'>Password</span></label>
                   <input type='password' {...register("password",{
                    required:"password is required",
                    minLength:{value:6, message:"password must be 6 characters or longer"}
                   })} className='input input-bordered w-full' />
                   {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                   </div> 
                   
                    <input className='btn btn-info w-full mt-5' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-error'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-3'>New to Chate Bot <Link className='text-info' to ='/signup'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;