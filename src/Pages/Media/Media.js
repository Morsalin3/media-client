import React, { useEffect, useState } from 'react';
import MediaDetails from './MediaDetails';

const Media = () => {

    const [posts, setPostes] = useState([]);
    // const newServices = [...services].reverse();

    useEffect(()=>{
        fetch('https://media-server-three.vercel.app/posts')
        .then(res=>res.json())
        .then(data=>setPostes(data))

    },[])

    return (

         <section className='mt-10'>
                <h2 className='text-3xl font-bold my-10 text-center'>All Posts</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
        {
            posts?.map(post => <MediaDetails
            key={post._id}
            post={post}
            ></MediaDetails> )
        }
            </div>
        </section>
    );
};

export default Media;