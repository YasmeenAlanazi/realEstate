import axios from 'axios';
const API_URL = 'https://671536dd33bc2bfe40b9c867.mockapi.io/properties';
export const getProperties = () => axios.get(API_URL);
export const getPropertyById = (id) => axios.get('${API_URL}/${id}');
export const createProperty = (data) => axios.post(API_URL, data);
export const updateProperty = (id, data) => axios.put('${API_URL}/${id}' , data);
export const deleteProperty = (id) => axios.delete('${API_URL}/${id}');
