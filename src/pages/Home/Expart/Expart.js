import React from 'react';

const Expart = ({ expart }) => {
    const { img, name, expertize } = expart
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{expertize}</p>
        </div>
    );
};

export default Expart;