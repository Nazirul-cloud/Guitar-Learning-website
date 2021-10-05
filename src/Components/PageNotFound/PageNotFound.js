import React from 'react';
import NotFound from '../../images/Not-Found.png';
const PageNotFound = () => {
    return (
        <div className="text-center">
            <div className="mt-5">
                <h2 className="text-center text-danger fs-1">404</h2>
                <p className="text-center text-danger fw-bold">The Page Not Found</p>
            </div>
            <img className="bg-img-none" src={NotFound} alt="" />
        </div>
    );
};

export default PageNotFound;