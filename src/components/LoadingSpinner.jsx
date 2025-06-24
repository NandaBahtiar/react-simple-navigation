// src/components/LoadingSpinner.jsx
import React from 'react';
import './LoadingSpinner.css'; // Kita akan buat file CSS ini

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default LoadingSpinner;