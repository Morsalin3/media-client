import React from 'react';

const MediaDetails = ({post}) => {
    const {texts, image} = post;
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
        <figure><img src={image} alt="pic" className='rounded w-[80%] h-[250px]' /></figure>
        <div className="card-body">
          {/* <h2 className="card-title">Shoes!</h2> */}
          <p>{texts}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Like</button>
          </div>
        </div>
      </div>
    );
};

export default MediaDetails;