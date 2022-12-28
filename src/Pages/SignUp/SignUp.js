import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [signUpError, setSignUpError] = useState('')
    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    const handleSignUp = ()=>{

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
                                required: "Name address is required"
                            })}

                            className='input input-bordered w-full' />
                        {errors.Name && <p className='text-error'>{errors.Name?.message}</p>}
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
                                required: "institute address is required"
                            })}

                            className='input input-bordered w-full' />
                        {errors.institute && <p className='text-error'>{errors.institute?.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className='label-text'>Address</span></label>
                        <input type='text'
                            {...register("address", {
                                required: "Address address is required"
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