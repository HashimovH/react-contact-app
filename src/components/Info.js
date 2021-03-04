import React from 'react';

function Info() {
    let offices = ['Tallinn, Estonia', 'Vabaduse Workland', 'Pärnu mnt 12, 10146', 'Berlin, Germany', 'Bikini Berlin, Scaling Spaces, 2.OG', 'Budapester Str. 46', '10787 Berlin'];
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 info">
            Media enquiries:<br/>
            <a href="mailto:press@modularbank.co">press@modularbank.co</a>
            <br/>
            Career questions:<br/>
            <a href="careers@modularbank.co">careers@modularbank.co</a>
            <br/>
            <div>Our offices:</div>
            {
                offices.map((office, index)=> {
                    return <div key={index}>{office}</div>
                })
            }

        </div>
    )
}

export default Info
