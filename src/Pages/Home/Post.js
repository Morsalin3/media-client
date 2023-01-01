import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import msg from '../../assets/msg.png'
import { AuthContext } from '../../contexts/AuthProvider';

const Post = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleForm = (data) => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgdata=>{
            console.log(imgdata)
            if(imgdata.success){
                const posts ={
                    texts: data.message,
                    image: imgdata.data.url
                }

                // post data to database
                fetch('https://media-server-three.vercel.app/posts',{
                    method: 'POST',
                    headers: {
                        'content-type':'application/json',
                    },
                    body: JSON.stringify(posts)
                })
                .then(res=>res.json())
                .then(result =>{
                    console.log(result);
                    reset();
                    toast.success(`post added successfully`)

                })
            }
        })
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

                       {user?.email?
                         <input className='btn btn-info w-full mt-8' value='ADD POST' type="submit" />
                         :
                         <input className='btn btn-info w-full mt-8' value='Please signup or login first' type="submit" />
                       }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Post;