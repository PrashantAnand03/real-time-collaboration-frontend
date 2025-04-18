import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const user = JSON.parse(localStorage.getItem('user'));
// Extract the token from the parsed object
const token = user ? user.token : null;

// Get a document
export const getDocuments = async () => {
    const { data } = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// Get a document by ID
export const getDocumentById = async (id) => {
    try {
    const { data } = await axios.get(`${API_URL}/api/documents/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
   } catch (error) {
    if (error.response && error.response.status === 404) {
        throw new Error('Document not found');
    }
    throw new Error('Failed to fetch document');
}
};


// Update a document by ID
export const updateDocument = async (id, documentData) => {
    // const { data } = await axios.put(`${API_URL}/${id}`, documentData, {
            const { data } = await axios.put(`${API_URL}/api/documents/${id}`, documentData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// Delete a document by ID
export const deleteDocument = async (id) => {
    // const { data } = await axios.delete(`${API_URL}/${id}`, {
            const { data } = await axios.delete(`${API_URL}/api/documents/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};
