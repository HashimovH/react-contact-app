import React from 'react';

function Message(props) {
    return (
        props.show && (
            <div className="alert alert-custom text-center">
                <div className="text-center">
                    <i className="fa fa-check"></i>
                </div>
                Your message has been delivered successfully. Thank you!
            </div> 
        )
    )
}

export default Message
