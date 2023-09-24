import React from 'react';

const Logo = (prop) => {
    return (<>
        <div className={`flex align-start direction-column ${prop.className}`}>
            <div className='flex'>
                <img src="./Logo.png" alt="" />
                <h1 className='color'>RideWizard</h1>
            </div>
        </div>
    </>);
}


export default Logo;