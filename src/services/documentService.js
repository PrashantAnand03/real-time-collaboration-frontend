import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const user = JSON.parse(localStorage.getItem('user'));
// Extract the token from the parsed object
const token = user ? user.token : null;

export const getDocuments = async () => {
    const { data } = await axios.get(`${API_URL}/api/documents`, { // 🔧 Updated path
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export const getDocumentById = async (id) => {
    const { data } = await axios.get(`${API_URL}/api/documents/${id}`, { // 🔧 Updated path
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// Update a document by ID
export const updateDocument = async (id, documentData) => {
    const { data } = await axios.put(`${API_URL}/api/documents/${id}`, documentData, { // 🔧 Updated path
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// Delete a document by ID
export const deleteDocument = async (id) => {
    const { data } = await axios.delete(`${API_URL}/api/documents/${id}`, { // 🔧 Updated path
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};
