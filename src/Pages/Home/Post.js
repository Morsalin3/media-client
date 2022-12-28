import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import msg from '../../assets/msg.png'

const Post = () => {

    const { register, handleSubmit, reset } = useForm();

    const handleForm = () => {

    }

    return (
        <div className="hero w-full">
            <div className="hero-content justify-center items-center grid gap-10 my-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="w-1/2  ">
                    <img src={msg} alt="" className='mx-auto' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-8 px-5 bg-base-100">
                <h2 className='text-3xl font-bold  text-center uppercase'>Add Your Post</h2>
                    <form onSubmit={handleSubmit(handleForm)}>

                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text'>Your Text</span></label>
                            <textarea type='text'{...register("message", {
                                required: true
                            })} className='textarea textarea-info textarea-bordered w-full' />
                        </div>

                        <div className='form-control w-full'>
                            <label className='label'><span className='label-text'>Add Image</span></label>
                            <input type='file'{...register("image", {
                                required: true
                            })} className='file-input file-input-bordered file-input-info w-full' />
                            {/* {errors.img && <p className='text-error'>{errors.img.message}</p>} */}
                        </div>

                        <input className='btn btn-info w-full mt-8' value='ADD POST' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Post;