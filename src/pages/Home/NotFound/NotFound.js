import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className="mt-5" src={notfound} alt="" />
            <div>
                <Link to='/'>
                    <button className="bg-info p-2 w-80px rounded">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;