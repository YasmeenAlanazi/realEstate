import React, { useEffect, useState } from 'react';
import { getProperties , deleteProperty } from './api';
const propertyList = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        getProperties().then(response => {
            setProperties(response.data);
        });
    }, []);
    const handleDelete = (id) => {
        if (window.confirm('Are You Sure?')) {
            deleteProperty(id).then(() => {
                setProperties(properties.filter(property => property.id !== id));
            });
        }
    };
    return (
        <div>
        <h2> Propery Listings </h2>
        <div className="property-list">
        { properties.map(property => (
           <div key={property.id} className="property-card">
               <h3> {property.title} </h3>
               <p> {property.address} </p>
                <p> {property.price} </p>
                <button onClick={()=> handleDelete(property.id) }>Delete</button>
           </div>
        ))}
            </div>
        </div>

    );
};
export default propertyList;
