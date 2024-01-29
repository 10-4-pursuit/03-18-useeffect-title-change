import React, { useState, useEffect } from 'react';

const TitleChanger = () => {
    const[name, setName] = useState('');

    useEffect(() => {
        document.title = `Hello, ${name || 'Stranger'}`;
    }, [name]);
    return (
        <div>
            <label htmlFor="nameInput">Name:</label>
            <input 
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};
export default TitleChanger;

