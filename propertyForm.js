import React, { useState } from 'react';
import { createProperty, updateProperty } from './api';

const propertyForm = ({ property, onSave }) => {
    const [fromData, setFormData] = useState ({
        title: property?.title || '',
        address: property?.address || '',
        price: property?.address || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (property) {
            updateProperty(property.id, fromData).then(onSave);
        }
        else {
            createProperty(fromData).then(onSave);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={fromData.title}
                onChange={(e) => setFormData({ ...fromData, title: e.target.value })}
                placeholder="Title" />
            <input type="text" value={fromData.address}
                onChange={(e) => setFormData({ ...fromData, address: e.target.value })}
                placeholder="Address" />
            <input type="text" value={fromData.price}
                onChange={(e) => setFormData({ ...fromData, price: e.target.value })}
                placeholder="Price" />
        </form>
    );
};
export default propertyForm;