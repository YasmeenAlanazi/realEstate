import React, { useEffect, useState } from 'react';
import React from 'react';
import { getProperties } from './api';
import { useParams } from 'react-router-dom';

const propertyDetail = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    useEffect(() => {
        getPropertyById(id).then(Response => {
            setProperty(Response.data);
        });
    }, [id]);

    if (!prperty) return <div>Loading............</div>;
    return (
        <div>
            <h2> {property.title} </h2>
            <p> {property.address} </p>
            <p> {property.price} </p>
            <p> {property.description} </p>
        </div>
    );
};
export default propertyDetail;