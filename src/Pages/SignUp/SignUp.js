import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    const handleSignUp = (data)=>{
        setSignUpError("")
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            toast.success('user create successfully')
            const userInfo = {
                displayName : data.name
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email, data.institute, data.address)
            })
        })
        .catch(error=>{
            setSignUpError(error.message)
        })
    }

    const saveUser =(name, email, institute, address)=>{
        const user ={name, email, institute, address};
        fetch('https://media-server-three.vercel.app/user',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('save user data',data);
        })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Sing Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Name</span></label>
                        <input type='text'
                            {...register("name", {
                                required: "Name is required"
                            })}

                            className='input input-bordered w-full' />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Email</span></label>
                        <input type='email'
                            {...register("email", {
                                required: "email address is required"
                            })}

                            className='input input-bordered w-full' />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Institute Name</span></label>
                        <input type='text'
                            {...register("institute", {
                                required: "institute name is required"
                            })}

                            className='input input-bordered w-full' />
                        {errors.institute && <p className='text-error'>{errors.institute?.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Address</span></label>
                        <input type='text'
                            {...register("address", {
                                required: "address is required"
                            })}

                            className='input input-bordered w-full' />
                        {errors.address && <p className='text-error'>{errors.address?.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Password</span></label>
                        <input type='password' {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: "password must be 6 characters or longer" }
                        })} className='input input-bordered w-full' />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-info w-full mt-5' value='Sign Up' type="submit" />
                    <div>
                        {signUpError && <p className='text-error'>{signUpError}</p>}
                    </div>
                </form>
                <p className='mt-3'>Already have an account <Link className='text-info' to='/login'>Please login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;