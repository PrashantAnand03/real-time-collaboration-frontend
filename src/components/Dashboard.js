// Code Dashboard

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client'; // Import Socket.IO client

const Dashboard = () => {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const socket = io(process.env.REACT_APP_API_URL); //  Connect to backend socket

        const fetchDocuments = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const token = user ? user.token : null;
                const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/documents`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setDocuments(data);
            } catch (error) {
                console.error('Failed to fetch documents:', error);
                navigate('/');
            }
        };

        fetchDocuments();

        // Listen for real-time events
        socket.on('documentCreated', (newDoc) => {
            setDocuments(prevDocs => [newDoc, ...prevDocs]);
        });

        socket.on('documentDeleted', (deletedId) => {
            setDocuments(prevDocs => prevDocs.filter(doc => doc._id !== deletedId));
        });

        socket.on('documentUpdated', (updatedDoc) => {
            setDocuments(prevDocs =>
                prevDocs.map(doc => doc._id === updatedDoc._id ? updatedDoc : doc)
            );
        });

        // Clean up on unmount
        return () => {
            socket.disconnect();
        };
    }, [navigate]);

    return (
        <div className="container">
            <h2 className="my-4">LiveDocs</h2>
            <div className="row">
                {documents.map((doc) => (
                    <div key={doc._id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{doc.title}</h5>
                                <p className="card-text">Created on: {new Date(doc.createdAt).toLocaleDateString()}</p>
                                <Link to={`/document/${doc._id}`} className="btn btn-primary mt-auto">Open Document</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button className="btn btn-success mt-4" onClick={() => navigate('/document/new')}>Create New Document</button>
            </div>
        </div>
    );
};

export default Dashboard;




// Obsolete code, no longer in use

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Dashboard = () => {
//     const [documents, setDocuments] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchDocuments = async () => {
//             try {
//                 const user = JSON.parse(localStorage.getItem('user'));
//                 // Extract the token from the parsed object
//                 const token = user ? user.token : null;
//                 // const { data } = await axios.get('http://localhost:5000/api/documents', { // local host
//                     const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/documents`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setDocuments(data);
//                 // console.log(data)
//             } catch (error) {
//                 console.error('Failed to fetch documents:', error);
//                 navigate('/');
//             }
//         };
//         fetchDocuments();
//     }, [navigate]);

//     return (
//         <div className="container">
//         <h2 className="my-4">LiveDocs</h2>
//         <div className="row">
//             {documents.map((doc) => (
//                 <div key={doc._id} className="col-md-4 mb-4">
//                     <div className="card h-100">
//                         <div className="card-body d-flex flex-column">
//                             <h5 className="card-title">{doc.title}</h5>
//                             <p className="card-text">Created on: {new Date(doc.createdAt).toLocaleDateString()}</p>
//                             <Link to={`/document/${doc._id}`} className="btn btn-primary mt-auto">Open Document</Link>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         <div className="text-center">
//             <button className="btn btn-success mt-4" onClick={() => navigate('/document/new')}>Create New Document</button>
//         </div>
//     </div>
// );
// };

// export default Dashboard;
