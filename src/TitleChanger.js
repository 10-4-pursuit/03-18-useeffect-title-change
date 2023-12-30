import React, { useState, useEffect } from 'react';

function TitleChanger() {
    const [name, setName] = useState('Doofusdanny');

    useEffect(() => {
        document.title = name;
    }, [name]);

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>{name}</h1>
            <input
                type="text"
                value={name}
                onChange={handleChange}
            />
        </div>
    );
}

export default TitleChanger;

