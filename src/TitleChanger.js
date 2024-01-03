import React, {useState, useEffect} from 'react';

function TitleChanger () {
    const [name, setName] = useState('Kyron');
    useEffect(() => {
        document.title = 'Hello ' + name;
    }, [name]);
    return (<div>
           <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Your name: {name}</p>
        </div>)
}

export default TitleChanger;