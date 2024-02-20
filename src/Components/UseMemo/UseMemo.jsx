import React, { useMemo, useState } from 'react';

const UseMemoExample = () => {
    const [value, setValue] = useState(1);

    const handleChange = useMemo(() => {
        // Return a memoized version of the function
        return () => {
            console.log('with useMemo');
            setValue(prevValue => prevValue * 2);
        };
    }, []); // Since there are no dependencies, this will be computed only once

    const handleWithoutMemo = () => {
        const updateValue = () => {
            console.log('without useMemo');
            setValue(prevValue => prevValue * 2);
        };
    
        updateValue();  
    };
    

    const handleLogValue = () => {
        console.log(value);
    };

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleWithoutMemo}>Without useMemo Button</button>
            <button onClick={handleChange}>With useMemo Button</button>
            <button onClick={handleLogValue}>Log Value</button>
        </div>
    );
};

export default UseMemoExample;
