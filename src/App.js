import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import DocumentForm from './components/DocumentForm';
import DocumentDetails from './components/DocumentDetails';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            {/* Use Flexbox to push footer to bottom */}
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Navbar />
                
                {/* Main Content Area */}
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/document/:id" element={<DocumentDetails />} />
                        <Route path="/document/new" element={<DocumentForm />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
