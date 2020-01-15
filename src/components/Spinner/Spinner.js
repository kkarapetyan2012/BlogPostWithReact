import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <div className="loader-container">
                <div className="loader">
                    <div className="loader">
                        <div className="loader">
                            <div className="loader">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;