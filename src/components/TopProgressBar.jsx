import React from 'react';
import './TopProgressBar.css';

// Komponen ini menerima prop `isLoading` untuk menentukan apakah akan ditampilkan atau tidak
const TopProgressBar = ({ isLoading }) => {
    return (
        <div className={`progress-bar-container ${isLoading ? 'loading' : ''}`}>
            <div className="progress-bar"></div>
        </div>
    );
};

export default TopProgressBar;