import React, { useState, useEffect } from 'react';

const SecondsCalculator = () => {
    const [dob, setDob] = useState('');
    const [secondsLived, setSecondsLived] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const birthDate = new Date(dob);
            const currentDate = new Date();
            const difference = currentDate - birthDate;
            const seconds = Math.floor(difference / 1000);
            setSecondsLived(seconds);
        }, 1000);

        return () => clearInterval(timer);
    }, [dob]);

    const handleInputChange = (e) => {
        setDob(e.target.value);
    };

    return (
        <div>
            <input type="text" value={dob} onChange={handleInputChange} placeholder="ДД.ММ.ГГГГ" />
            {dob && <p>Вы прожили: {secondsLived} секунд.</p>}
        </div>
    );
};

const SecondsCalculatorForm = () => {
    return (
        <form>
            <SecondsCalculator />
        </form>
    );
};

export default SecondsCalculatorForm;