import React, {useState, useEffect} from 'react';

function TitleChanger() {
    const[name, setName] = useState('Yah-neen');

useEffect(() => {
    document.title = `Hello, ${name || 'Guest'}`;
}, [name]);


const handleNameChange = (event) => {
    setName(event.target.value);
};

return (
    <div>
        <lable>
            Enter Name:
            <input type="text" value={name} onChange={handleNameChange}/>
        </lable>
        <h1>Hello, {name || 'Guest'}!</h1>
    </div>
);
}

export default TitleChanger;