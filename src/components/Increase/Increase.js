import React, { useState } from 'react';
import './Increase.css'
const Increase = () => {
    const [power, setPower] = useState(0);

    const button = () => setPower(power + 1);
    const button1 = () => setPower(power - 1);

    return (
        <div>
            <h1>My power:{power}</h1>
            <div className='button'>
                <button onClick={button}>Power Increase</button>
                <button onClick={button1}>Power decrease</button>
            </div>
        </div>
    );
};

export default Increase;