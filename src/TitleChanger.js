import React from'react';

import { useEffect, useState } from 'react';

function TitleChanger () {
    const [name, setName] = useState('Micheal Jordan');
    const [backgroundColor, setBackgroundColor] = useState('red');

    React.useEffect(() => {
        document.title = 'Hello' + ' ' + name;
       }, [name]);

return ( 
    <div style={{ backgroundColor: backgroundColor }}>
        <p>
          {name}
        </p>
        <button onClick={() => {
            setName('Clyde Drexler')
            setBackgroundColor('#99ccff')
            }}>Click here to see who influenced Jordan</button>

    </div>
)
}

export default TitleChanger;