import React from 'react';

const Contact = () => {
    return (
        <div>
            <p className="text-center p-4">If you would like to contact us via email then please fill in the form below. We'll get back to you either by phone, text or email, so let us know your preference. Speak to you soon!</p>
            <div className="text-center">
                <input className="w-50 b" type="text" />
                <br/>
                <button className="btn btn-info mt-2">Send</button>
            </div>
        </div>
    );
};

export default Contact;