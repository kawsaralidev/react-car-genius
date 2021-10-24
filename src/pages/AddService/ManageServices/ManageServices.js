import React, { useEffect, useState } from 'react';

const ManageServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    alert('deleted successfully')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                }

            })
    }
    return (
        <div>
            <h1>Manage services</h1>
            {
                services.map(service =>
                    <div key={service._id}>  <h2>{service.name}</h2>
                        <button onClick={() => handleDelete(service._id)}>delete</button></div>
                )
            }
        </div>
    );
};

export default ManageServices;