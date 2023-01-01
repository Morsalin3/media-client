import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import AboutDetails from './AboutDetails';

const About = () => {
    const { user, loading } = useContext(AuthContext)
    const [abouts, setAbout] = useState({});
    console.log(abouts)

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [user?.email])

    if(loading){
        return <progress className="progress progress-info w-56"></progress>
     }

    return (
        <div>
            <h2 className='text-3xl my-10 font-semibold text-center text-info'>User Information</h2>
            {
                 <AboutDetails
                abouts={abouts}
                ></AboutDetails> 
            }
        </div>
    );
};

export default About;