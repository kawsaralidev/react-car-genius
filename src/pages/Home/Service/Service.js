import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { _id, img, name, description, price } = service
    return (
        <div>

            <img src={img} alt="" />
            <h3>name:{name}</h3>
            <h4>price: {price}</h4>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="bg-primary p-1 text-white rounded mb-3">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;