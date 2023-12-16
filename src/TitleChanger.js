import React, { useState, useEffect } from "react";

function TitleChanger() {
    const [name, setName] = useState('John');

    useEffect(()=>{
        document.title = name; 
    },[name]);
    return (
        <div>
            <h1>Hello: {name}</h1>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
    )
}


export default TitleChanger;