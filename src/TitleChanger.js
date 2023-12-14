import React, {useState, useEffect} from 'react';

function TitleChanger() {
    const [name, setName] = useState('');
    
    useEffect(() => {
        document.title = 'Hello ' + name;
    }, [name]);

    return (
        <div>
          <h2>Change the Title</h2>
          <label htmlFor="nameInput">Enter your name: </label>
          <input type="text" id="nameInput" value={name} onChange={(e) => setName(e.target.value)}
          />
        </div>
      );
}

export default TitleChanger;