import React from 'react';

const AboutDetails = ({abouts}) => {
    const {name, email, institute, address} = abouts;
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-auto p-8">
        <p>Name: {name} </p>
        <p>Email: {email} </p>
        <p>Institue: {institute} </p>
        <p>Address: {address}</p>
     </div>
    );
};

export default AboutDetails;