import React from 'react';

const FeatureCard = (realEstate) => {
    const { location, image} = realEstate;
    console.log(realEstate);
    return (
        <div className='pt-5'>
      
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{location}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FeatureCard;