import { useState, useEffect } from 'react';

function TitleChanger() {
    const [title, setTitle] = useState('Bob');
    
    useEffect(() => {
        document.title = title;
    }, [title]);
 
    return (
        <div>
            <h1>{title}</h1>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} /> 
        </div>
    )
}

export default TitleChanger